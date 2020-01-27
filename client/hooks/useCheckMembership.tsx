import { useUser } from "../contexts/user";

export default function useCheckMembership(communityId: string) {
  let userMemberLevel = "";

  const { user } = useUser();
  if (!user) return userMemberLevel;

  const membershipLevels = Object.keys(user.communities);

  membershipLevels.some((level: string) => {
    if (user.communities[level].some((id: string) => id === communityId)) {
      userMemberLevel = level;
      return true;
    }
    return false;
  });

  return userMemberLevel;
}
