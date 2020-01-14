export default {
  container: provided => ({ ...provided, width: 300 }),
  control: provided => ({
    ...provided,
    minHeight: 40,
    cursor: "text",
    border: "1px solid #edeff1;",
    fontSize: "1.4rem",
    "&:hover": {},
  }),
  menu: provided => ({
    ...provided,
    fontSize: "1.4rem",
    marginTop: 2,
    zIndex: 11,
  }),
  clearIndicator: provided => ({
    ...provided,
    cursor: "pointer",
  }),
  indicatorSeparator: () => ({}),
};
