import fetchIt from "../../utils/fetch";

// formats options for our Select
const createOption = ({ name, _id }) => ({ label: name, value: _id, key: _id });

export default async function getOptions(inputValue) {
  try {
    // gets all communities
    const communities = await fetchIt("/community");
    // if the value is undefined or empty, show all communities
    if (!inputValue) return communities.map(createOption);
    // lowercase the value for comparison
    const val = inputValue.toLowerCase();
    // filter communities based on the value
    return communities
      .filter(({ name }) => name.toLowerCase().includes(val))
      .map(createOption);
  } catch (err) {
    console.log(err);
    return [];
  }
}
