import styled from "styled-components";
import Heading from "./HeadingProp";
import Paragraph from "./ParagraphProp";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaLinkedinIn } from "react-icons/fa";
import { MdMail } from "react-icons/md";

import { Link } from "react-router-dom";

const StyledWorkerCard = styled.article`
  width: 350px;
  height: 400px;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  text-align: center;
  gap: 4px;
  box-shadow: rgba(170, 170, 170, 0.3) 0px 10px 15px 0px;
`;

const ImgFrame = styled.figure`
  width: 350px;
  height: 310px;
`;

const StyledImg = styled.img`
  width: 350px;
  height: 310px;
  object-fit: fit;
`;

const SocialMediaBox = styled.div`
  width: 53px;
  height: 16px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  color: #2a2c30;
`;

const StyledEmail = styled(MdMail)`
  color: #2a2c30;
  width: 21px;
  height: 16px;
`;
const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const WorkersCard = () => {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      console.log("render");
      try {
        const options = {
          method: "GET",
          url: `https://dinmaegler.onrender.com/agents`,
        };
        console.log(options);
        const { data } = await axios.request(options);
        console.log(data);
        setResponse(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      {response.map((data, index) => (
        <StyledWorkerCard key={index} onClick={scrollToTop}>
          <Link to={`/AgentDetailsPage/${data?.id}`}>
            <ImgFrame>
              <StyledImg src={data?.image.url} alt=""></StyledImg>
            </ImgFrame>
          </Link>
          <Heading
            title={data?.name}
            size="24"
            weight="600"
            as="h3"
            color="2A2C30"
            lineheight="32"
            width="302"
            height="32"
          ></Heading>
          <Paragraph
            text={data?.title}
            size="18"
            as="p"
            lineheight="30"
            color="7B7B7B"
            width="302"
            height="30"
          ></Paragraph>
          <SocialMediaBox>
            <StyledEmail></StyledEmail>
            <FaLinkedinIn></FaLinkedinIn>
          </SocialMediaBox>
        </StyledWorkerCard>
      ))}
    </>
  );
};

export default WorkersCard;
