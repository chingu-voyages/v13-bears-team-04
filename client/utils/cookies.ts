import { serialize } from "cookie";
import { NextApiResponse, NextApiRequest } from "next";

type CookieOptions = {
  secure?: boolean;
  expires?: Date;
  sameSite?: boolean | "strict" | "lax" | "none" | undefined;
  httpOnly?: boolean;
};

const isProd = process.env.NODE_ENV === "production";

export const defaultOptions: CookieOptions = {
  secure: isProd,
  expires: new Date(Date.now() + 86400000), // 1 day
  sameSite: false,
  httpOnly: true,
};

// creates a cookie and sets it on the res headers
type CreateCookieOnHeader = (
  res: NextApiResponse,
  name: string,
  value?: string | object,
  options?: CookieOptions
) => void;

export const createCookieOnHeader: CreateCookieOnHeader = (
  res,
  name,
  value = "",
  additionalOptions = {}
) => {
  const isValueObj = typeof value === "object";
  const modifiedValue = isValueObj ? JSON.stringify(value) : String(value);

  const options = { ...defaultOptions, ...additionalOptions };

  const cookieString = serialize(name, modifiedValue, options);

  res.setHeader("Set-Cookie", cookieString);
};

type CookieWrapper = (
  name: string,
  value?: string | object,
  options?: CookieOptions
) => void;

interface CookieResponse extends NextApiResponse {
  cookie: CookieWrapper;
}

export type NextApiFunction = (
  req: NextApiRequest,
  res: CookieResponse
) => Promise<void>;

// used to wrap API route functions to make res.cookie possible
const cookieWrapper = (handler: NextApiFunction) => (
  req: NextApiRequest,
  res: CookieResponse
) => {
  res.cookie = (...args) => createCookieOnHeader(res, ...args);

  return handler(req, res);
};

export default cookieWrapper;
