import React, { createContext, useContext, useState, useEffect } from "react";
import { VoteType } from "../../types/vote";
import { useUser } from "../../contexts/user";
import { useAuthPopup } from "../../contexts/authpopup";
import fetchIt from "../../utils/fetch";

const VoteContext = createContext(
  {} as {
    points: number;
    usersVote: boolean | null;
    handleVoteClick: (isUpVote: boolean) => void;
  }
);

type ProviderTypes = {
  children: React.ReactNode;
  votes: VoteType[];
  isOnPost?: boolean;
  postId?: string;
  commentId?: string;
  isDeleted: boolean;
};

export const VoteProvider = ({
  children,
  votes,
  isOnPost,
  postId,
  commentId,
  isDeleted,
}: ProviderTypes) => {
  // get the initial points from all the votes
  const initialPoints = votes.reduce((acc, cVal) => {
    const incrementer = cVal.isUpVote ? 1 : -1;
    return acc + incrementer;
  }, 0);
  const [points, setPoints] = useState(initialPoints);

  // keep track of if the users voting status
  const [usersVote, setUsersVote] = useState<boolean | null>(null);

  // access our custom hook contexts to grab the necessary tools
  const { setAuthPopup } = useAuthPopup();
  const { isAuthenticated, user, token } = useUser();

  // check if user already voted and update usersVote, if so
  useEffect(() => {
    const userVote = isAuthenticated
      ? votes.find(({ owner }) => owner === user._id)
      : null;

    setUsersVote(userVote ? userVote.isUpVote : null);
  }, [isAuthenticated]);

  // forces a user to login before voting
  function handleVoteClick(isUpVote: boolean) {
    // restrict API calls for the same votes
    // sorry you can't UNvote!
    if (usersVote === isUpVote || isDeleted) return;

    if (!isAuthenticated) {
      setAuthPopup("signup");
    } else {
      handleVoteSubmission(isUpVote);
    }
  }

  // handles the actual submissions of votes
  async function handleVoteSubmission(isUpVote: boolean) {
    try {
      const url = isOnPost ? `/onPost/${postId}` : `/onComment/${commentId}`;
      const vote = await fetchIt(`/vote${url}`, {
        method: "POST",
        token,
        body: JSON.stringify({ isUpVote }),
      });

      // if the user is flipping their vote, we'd ...
      // ... need to double the increment either way
      const incrementer = usersVote === null ? 1 : 2;
      const addOrSubNum = vote.isUpVote ? incrementer : -incrementer;

      setPoints(state => state + addOrSubNum);
      setUsersVote(vote.isUpVote);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <VoteContext.Provider value={{ points, usersVote, handleVoteClick }}>
      {children}
    </VoteContext.Provider>
  );
};

export const useVotes = () => useContext(VoteContext);
