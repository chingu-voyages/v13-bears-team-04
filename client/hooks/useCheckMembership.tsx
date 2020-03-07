import { useUser } from "../contexts/user";

type CommunityType = {
  communities: { [key: string]: string[] };
};

export default function useCheckMembership(communityId: string): string {
  let userMemberLevel = "";

  const { isAuthenticated, user } = useUser();
  if (!isAuthenticated) return userMemberLevel;

  const { communities }: CommunityType = user;

  Object.keys(communities).some(level => {
    const foundLevel: boolean = communities[level].some(
      (id: string) => id === communityId
    );

    if (foundLevel) {
      userMemberLevel = level;
    }
    return userMemberLevel;
  });

  return userMemberLevel;
}
