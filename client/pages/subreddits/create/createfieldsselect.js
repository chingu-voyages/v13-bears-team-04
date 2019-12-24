import allTopics from "./createfieldsselecttopics";

const possibleOptions = allTopics
  .filter(topic => topic.isRecommended)
  .map(({ value }) => ({ label: value, key: value, value }))
  .sort((a, b) => {
    if (a.value < b.value) return -1;
    if (b.value < a.value) return 1;
    return 0;
  });

export const options = [
  {
    label: "Suggested Topics",
    options: possibleOptions,
  },
];

export const styles = {
  control: provided => ({
    ...provided,
    minHeight: 48,
    border: "1px solid #edeff1;",
    "&:hover": {},
  }),
  menu: provided => ({ ...provided, fontSize: "1.4rem", marginTop: 2 }),
  input: provided => ({ ...provided, fontSize: "1.4rem" }),
  groupHeading: provided => ({
    ...provided,
    paddingBottom: 5,
    fontWeight: 700,
  }),
  multiValue: provided => ({
    ...provided,
    backgroundColor: "rgb(246, 247, 248)",
    fontSize: "1.4rem",
    lineHeight: "1.8rem",
    padding: "2px 4px 2px 8px",
    margin: 6,
    color: "rgb(0, 121, 211)",
    "&:hover": { color: "white", backgroundColor: "rgb(0, 121, 211)" },
  }),
  multiValueLabel: () => ({}),
  multiValueRemove: provided => ({
    ...provided,
    paddingRight: 0,
    color: "inherit",
    cursor: "pointer",
    "&:hover": { color: "inherit", backgroundColor: "inherit" },
  }),
};
