import fetch from "isomorphic-unfetch";
import { parseCookies } from "nookies";

// custom fetch wrapper
export default async function fetchIt(
  url,
  givenOptions = {},
  isAuthNeeded = false
) {
  const options = makeOptions(givenOptions, isAuthNeeded);
  // typical fetch
  const resp = await fetch(`${process.env.API_URL}${url}`, options);
  // parse the response
  const data = await resp.json();
  // if there's was an error, throw it
  if (!resp.ok) throw data;
  // otherwise return the results
  return data;
}

// used to expand our fetch options object with additional details
function makeOptions({ method = "GET", body }, isAuthNeeded) {
  const auth = isAuthNeeded ? getSessionId() : {};
  return {
    method,
    body,
    headers: { "Content-Type": "application/json", ...auth },
  };
}

// if isAuthNeeded is true, we'll need to send our cookie along too
function getSessionId() {
  const { sid } = parseCookies();
  if (!sid) throw new Error("Sorry, no session cookie found");
  return { Authorization: JSON.stringify({ sid }) };
}
