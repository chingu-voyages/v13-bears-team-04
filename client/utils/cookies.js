export const getCookieOptions = () => ({
  secure: process.env.NODE_ENV === "production",
  expires: new Date(Date.now() + 86400000), // 1 day
});
