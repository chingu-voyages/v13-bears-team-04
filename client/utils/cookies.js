export const getCookieOptions = () => ({
  // 1 day
  expires: 1 * 24 * 60 * 60,
  secure: process.env.NODE_ENV === "production",
  httpOnly: true,
  sameSite: "strict",
});
