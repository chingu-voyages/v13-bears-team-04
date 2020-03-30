export const getMemberCount = (users: { [key: string]: string[] }) => {
  return Object.keys(users).reduce((memberCount, key) => {
    return memberCount + users[key].length;
  }, 0);
};
