import fetch from "isomorphic-unfetch";

const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://chinguredditclone.herokuapp.com/api"
    : "https://chinguredditclone.herokuapp.com/api";

type GivenOptionsType = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: string;
  token?: string;
  cookie?: string;
};

// custom fetch wrapper
export default async function fetchIt(
  url: string,
  givenOptions: GivenOptionsType = {},
  alternateURL?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> {
  const options = getOptions(givenOptions);
  // typical fetch
  const resp = await fetch(`${alternateURL || API_URL}${url}`, options);
  // parse the response
  const data = await resp.json();
  // if there's was an error, throw it
  if (!resp.ok) throw data;
  // otherwise return the results
  return data;
}

// used to expand our fetch options object with additional details
function getOptions({ method = "GET", body, token, cookie }: GivenOptionsType) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: token ? `Bearer ${token}` : "",
    cookie: cookie || "",
  };
  return { method, body, headers };
}
