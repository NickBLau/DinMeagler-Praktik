import { styled } from "styled-components";
import { useState, useEffect } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/Ai";
import { json } from "react-router-dom";

const StyledHeart = styled(AiFillHeart)`
  color: black;
`;

const StyledButton = styled.button`
  border-radius: 15px;
  border: 0px solid gray;
  width: 36px;
  height: 36px;
  font-size: 20px;
  background-color: #eef7ff;
  grid-column-start: 3;

  cursor: pointer;
`;

const FavButtonAgent = ({ AgentId }) => {
  const [liked, setLiked] = useState(getStatus());

  function getStatus() {
    const likes = localStorage.getItem("likes");

    const parsedLikes = likes ? JSON.parse(likes) : [];

    return parsedLikes.includes(AgentId);
  }

  useEffect(() => {
    const likes = localStorage.getItem("likes");

    const parsedLikes = likes ? JSON.parse(likes) : [];

    if (liked) {
      localStorage.setItem("likes", JSON.stringify([...parsedLikes, AgentId]));
    } else {
      localStorage.setItem(
        "likes",
        JSON.stringify(parsedLikes.filter((like) => like !== AgentId))
      );
    }
  }, [liked]);

  return (
    <>
      <StyledButton className="Box-shadow" onClick={() => setLiked(!liked)}>
        <div className="Flex Center">
          {liked ? <StyledHeart /> : <AiOutlineHeart />}
        </div>
      </StyledButton>
    </>
  );
};

export default FavButtonAgent;
