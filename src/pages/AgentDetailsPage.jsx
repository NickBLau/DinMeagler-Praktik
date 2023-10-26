import styled from "styled-components";
import NavMenu from "../templates/NavMenu";
import FooterMenu from "../templates/FooterMenu";
import BannerWithFilter from "../components/BannerWithFilter";
import Paragraph from "../components/ParagraphProp";
import Heading from "../components/HeadingProp";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BsFillTelephoneFill } from "react-icons/Bs";
import { BiSolidPaperPlane } from "react-icons/bi";
import { FaInstagram, FaLinkedinIn, FaSkype } from "react-icons/fa";
import FavButtonAgent from "../components/FavoriteButtonAgent";
import ContactAgent from "../components/ContactAgentForm";
import SearchProptery from "../components/SearchProptery";
import AdBox from "../components/AdBox";

const StyledBanner = styled.div`
  max-width: 1920px;
  height: 192px;
  margin-top: 20px;
  background-image: url(../BannerImage.png);
  background-position-y: 40%;
  background-position-x: 100%;
  background-color: #162a41;
`;

const StyledAgentCardWrapper = styled.div`
  max-width: 1920px;

  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 50px;
`;

const StyledAgentDetailsWrapper = styled.div`
  width: 730px;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  margin-top: 30px;

  gap: 10px;
`;

const StyledAgentDetails = styled.section`
  width: 650px;
  height: 236px;
  padding-left: 40px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const StyledAgentCard = styled.article`
  width: 730px;
  display: flex;
  padding: 40px 40px 10px 40px;
  gap: 30px;
`;

const AgentImgBox = styled.figure`
  width: 280px;
  height: 280px;
  display: grid;
  grid-template-rows: 210px 1fr 1fr;
`;

const StyledImg = styled.img`
  width: 280px;
  height: 280px;
`;

const StyledGrayBox = styled.div`
  width: 52px;
  height: 2px;
  background-color: #d3dee8;
`;

const StyledSocialBox = styled.div`
  width: 134px;
  height: 40px;
  background-color: #162a41;
  grid-column: 1;
  grid-row: 2;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-self: center;
`;

const StyledSocialIcon = styled.figure`
  width: 18px;
  height: 30px;
  margin-top: 10px;
  font-size: 18px;
  color: white;
`;

const StyledDiv = styled.div`
  width: 335px;
  height: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
`;

const StyledDecorativeLine = styled.div`
  width: 60px;
  height: 4px;
  background-color: #162a41;
  margin-top: 12px;
`;

const StyledAside = styled.aside`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-left: 30px;
  gap: 30px;
`;

const AgentDetailsPage = () => {
  let { id } = useParams();
  const [response, setResponse] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      console.log("render");
      try {
        const options = {
          method: "GET",
          url: `https://dinmaegler.onrender.com/agents/${id}`,
        };

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
      <NavMenu></NavMenu>
      <StyledBanner>
        <BannerWithFilter
          title={"Kontakt en medarbejder"}
          size="60"
          weight="bolder"
          as="h2"
          color="FFFFFF"
          lineheight="80"
          width="713"
          height="80"
        ></BannerWithFilter>
      </StyledBanner>
      <StyledAgentCardWrapper>
        <div className="Flex">
          <StyledAgentDetailsWrapper>
            <StyledAgentCard>
              <AgentImgBox>
                <StyledImg src={response?.image?.url}></StyledImg>

                <StyledSocialBox>
                  <StyledSocialIcon>
                    <FaInstagram></FaInstagram>
                  </StyledSocialIcon>
                  <StyledSocialIcon>
                    <FaLinkedinIn></FaLinkedinIn>
                  </StyledSocialIcon>
                  <StyledSocialIcon>
                    <FaSkype></FaSkype>
                  </StyledSocialIcon>
                </StyledSocialBox>
              </AgentImgBox>
              <div className="Flex-directionColumn Gap-15">
                <StyledDiv>
                  <Heading
                    title={response?.name}
                    size="24"
                    weight="bold"
                    as="h3"
                    lineheight="32"
                    color="2A2C30"
                  ></Heading>
                  <FavButtonAgent></FavButtonAgent>
                </StyledDiv>
                <Paragraph
                  text={response?.title}
                  size="18"
                  as="p"
                  lineheight="30"
                  color="7B7B7B"
                ></Paragraph>
                <StyledGrayBox></StyledGrayBox>
                <div className="Flex Align-items-center Gap-10">
                  <BsFillTelephoneFill></BsFillTelephoneFill>
                  <Paragraph
                    text={response?.phone}
                    size="18"
                    as="p"
                    lineheight="30"
                    color="333333"
                  ></Paragraph>
                </div>
                <div className="Flex Align-items-center Gap-10">
                  <BiSolidPaperPlane></BiSolidPaperPlane>
                  <Paragraph
                    text={response?.email}
                    size="18"
                    as="p"
                    lineheight="30"
                    color="333333"
                  ></Paragraph>
                </div>
              </div>
            </StyledAgentCard>{" "}
            <StyledAgentDetails>
              <div className="Flex-directionColumn">
                <Heading
                  title={"Om " + response.name}
                  size="20"
                  weight="bold"
                  as="h2"
                  lineheight="30"
                  color="2A2C30"
                ></Heading>
                <StyledDecorativeLine></StyledDecorativeLine>
              </div>
              <Paragraph
                text={response?.description}
                size="18"
                as="p"
                lineheight="30"
                color="333333"
              ></Paragraph>
              {/* <Paragraph
                text={
                  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour."
                }
                size="18"
                as="p"
                lineheight="30"
                color="333333"
              ></Paragraph> */}
            </StyledAgentDetails>
            <ContactAgent></ContactAgent>
          </StyledAgentDetailsWrapper>{" "}
          <StyledAside>
            <SearchProptery></SearchProptery>
            <AdBox></AdBox>
          </StyledAside>
        </div>
      </StyledAgentCardWrapper>
      <FooterMenu></FooterMenu>
    </>
  );
};

export default AgentDetailsPage;
