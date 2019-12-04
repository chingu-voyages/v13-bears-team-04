import fetch from "isomorphic-unfetch";
import { parseCookies } from "nookies";

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

function makeOptions({ method = "GET", body }, isAuthNeeded) {
  const auth = isAuthNeeded ? getSessionId() : {};
  return {
    method,
    body,
    headers: { "Content-Type": "application/json", ...auth },
  };
}

function getSessionId() {
  const { sid } = parseCookies();
  if (!sid) throw new Error("Sorry, no session cookie found");
  return { Authorization: JSON.stringify({ sid }) };
}
