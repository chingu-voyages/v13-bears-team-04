export async function customFetch(url, options) {
  // typical fetch
  const resp = await fetch(`${process.env.API_URL}${url}`, options);
  // parse the response as usual
  const data = await resp.json();
  // if there's an error, throw that message
  if (!resp.ok) throw data.error;
  // otherwise return the results
  return data;
}
