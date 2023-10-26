import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavMenu from "../templates/NavMenu";
import FooterMenu from "../templates/FooterMenu";
import { useParams } from "react-router-dom";
import { BiMap, BiHeart } from "react-icons/bi";
import { ImStack } from "react-icons/im";
import { HiOutlinePhoto } from "react-icons/hi2";
import { BsFillTelephoneFill } from "react-icons/Bs";
import { BiSolidPaperPlane } from "react-icons/bi";
import { FaInstagram, FaLinkedinIn, FaSkype } from "react-icons/fa";

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lg-zoom.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import Paragraph from "../components/ParagraphProp";
import Heading from "../components/HeadingProp";

const StyledImgBox = styled.figure`
  max-width: 1900px;
  height: auto;
`;

const StyledWrapper = styled.div`
  max-width: 1920px;
  height: 1137px;
  display: flex;
  padding: 50px;
  flex-direction: column;
  align-items: center;
  align-self: center;
`;

const StyledSection = styled.section`
  width: 1110px;
  height: 85px;
  display: flex;

  justify-content: space-between;
  border-bottom: 1px solid gray;
`;

const StyledIcons = styled.div`
  height: 37px;
  font-size: 40px;
  color: #7b7b7b;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledUlWrapper = styled.div`
  max-width: 1920px;
  height: 140px;
  display: flex;
  margin-top: 25px;
  gap: 75px;
  margin-bottom: 30px;
`;

const StyledUl = styled.ul`
  height: 140px;
  display: flex;
  flex-direction: column;
`;

const StyledLi = styled.li`
  font-size: 16px;
  line-height: 28px;

  color: #000000;
  width: 150px;
  max-height: 30px;
  display: flex;
  justify-content: space-between;
`;

const StyledDetails = styled.section`
  width: 540px;
  height: 514px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-left: 200px;
  margin-right: 40px;
`;

const StyledAgentCardWrapper = styled.div`
  width: 730px;
  height: 408px;
  display: flex;
  flex-direction: column;
`;

const StyledAgentCard = styled.article`
  width: 730px;
  height: 354px;
  border: 1px solid gray;
  display: flex;
  margin-top: 30px;
  padding: 40px;
  gap: 30px;
`;

const AgentImgBox = styled.figure`
  width: 280px;
  height: 280px;
  display: grid;
  grid-template-rows: 210px 1fr 1fr;
`;

const Styledimg = styled.img`
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

const StyledImg = styled.img`
  max-width: 1920px;
  height: auto;
`;

const StyledBiHeart = styled(BiHeart)`
  width: 37px;
  height: 40px;
  color: #7b7b7b;
  margin-left: 5px;
`;

const StyledHiOutlinePhoto = styled(HiOutlinePhoto)`
  width: 37px;
  height: 40px;
  color: #7b7b7b;
`;

const StyledImStack = styled(ImStack)`
  width: 37px;
  height: 40px;
  color: #7b7b7b;
`;

const StyledBiMap = styled(BiMap)`
  width: 37px;
  height: 40px;
  color: #7b7b7b;
`;

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const DetailsPage = () => {
  let { id } = useParams();
  const [response, setResponse] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      console.log("render");
      try {
        const options = {
          method: "GET",
          url: `https://dinmaegler.onrender.com/homes/${id}`,
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

  if (Object.keys(response).length === 0) {
    return null;
  }

  const renderDetailsPage = () => (
    <>
      <NavMenu></NavMenu>
      <StyledImgBox className="Margin-top-20">
        <StyledImg
          className="img-full"
          src={response?.images[0].url}
          alt=""
          srcSet=""
        ></StyledImg>
      </StyledImgBox>
      <StyledWrapper>
        <StyledSection>
          <div className="Flex-directionColumn">
            <Paragraph
              text={response?.adress1}
              size="20"
              as="p"
              lineheight="30"
              color="162A41"
              weight="bold"
            ></Paragraph>
            <Paragraph
              text={response?.postalcode + " " + response?.city}
              size="20"
              as="p"
              lineheight="30"
              color="162A41"
              weight="bold"
            ></Paragraph>
          </div>
          <StyledIcons>
            <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
              <a href={response?.images[0].url}>
                {/* <StyledHiOutlinePhoto></StyledHiOutlinePhoto> */}
                <img
                  className="IconTest "
                  src="../LightBox/ImgThumb.png"
                  alt=""
                />
              </a>
              <a href={response?.floorplan.url}>
                {/* <StyledImStack></StyledImStack> */}
                <img
                  className="IconTest "
                  src="../LightBox/Floorplans.png"
                  alt=""
                />
              </a>
              <a href="../Map.png">
                {/* <StyledBiMap></StyledBiMap> */}
                <img
                  className="IconTest "
                  src="../LightBox/Location.png"
                  alt=""
                />
              </a>
            </LightGallery>
            <StyledBiHeart></StyledBiHeart>
          </StyledIcons>
          {/* <StyledIcons>
            <HiOutlinePhoto></HiOutlinePhoto>
            <ImStack></ImStack>
            <BiMap></BiMap>
            <BiHeart></BiHeart>
          </StyledIcons> */}

          <Heading
            title={"kr. " + response?.price.toLocaleString()}
            size="30"
            weight="bold"
            as="h2"
            color="162A41"
            lineheight="42"
          ></Heading>
        </StyledSection>
        <StyledUlWrapper>
          <StyledUl>
            <div className="Flex">
              <StyledLi>Sagsnummer:</StyledLi>
              <StyledLi> {response?.id}</StyledLi>
            </div>
            <div className="Flex">
              <StyledLi>Boligareal: </StyledLi>
              <StyledLi>{response?.livingspace} m²</StyledLi>
            </div>
            <div className="Flex">
              <StyledLi>Grundareal: </StyledLi>
              <StyledLi>{response?.lotsize} m²</StyledLi>
            </div>
            <div className="Flex">
              <StyledLi>Rum/værelser: </StyledLi>
              <StyledLi> {response?.rooms}</StyledLi>
            </div>
            <div className="Flex">
              <StyledLi>Antal Plan: </StyledLi>
              <StyledLi>{response?.floorplan.size} </StyledLi>
            </div>
          </StyledUl>
          <StyledUl>
            <div className="Flex">
              <StyledLi>Kælder:</StyledLi>
              <StyledLi> {response?.basementsize} m²</StyledLi>
            </div>
            <div className="Flex">
              <StyledLi>Byggeår:</StyledLi>
              <StyledLi>{response?.built}</StyledLi>
            </div>
            <div className="Flex">
              <StyledLi>Ombygget:</StyledLi>
              <StyledLi>{response?.remodel}</StyledLi>
            </div>
            <div className="Flex">
              <StyledLi>Energimærke</StyledLi>
              <StyledLi>{response?.energylabel}</StyledLi>
            </div>
          </StyledUl>
          <StyledUl>
            <div className="Flex">
              <StyledLi>Udbetaing:</StyledLi>
              <StyledLi> Kr. {response?.cost.toLocaleString()}</StyledLi>
            </div>
            <div className="Flex">
              <StyledLi>Brutto ex ejerudgift:</StyledLi>
              <StyledLi> Kr. {response?.gross.toLocaleString()}</StyledLi>
            </div>
            <div className="Flex">
              <StyledLi>Netto ex ejerudgift:</StyledLi>
              <StyledLi>Kr {response?.netto.toLocaleString()}</StyledLi>
            </div>
            <div className="Flex">
              <StyledLi>Ejerudgifter :</StyledLi>
              <StyledLi> Kr. {response?.payment.toLocaleString()}</StyledLi>
            </div>
          </StyledUl>
        </StyledUlWrapper>

        <div className="Flex ">
          <StyledDetails>
            <Heading
              title={"Beskrivelse"}
              size="24"
              weight="bold"
              as="h2"
              lineheight="32"
              color="2A2C30"
            ></Heading>
            <Paragraph
              text={response?.description}
              size="18"
              as="p"
              lineheight="30"
              color="333333"
            ></Paragraph>
          </StyledDetails>

          <StyledAgentCardWrapper>
            <Heading
              title={"Ansvalig mægler "}
              size="24"
              weight="bold"
              as="h2"
              lineheight="32"
              color="2A2C30"
            ></Heading>

            <StyledAgentCard>
              <AgentImgBox>
                {" "}
                <Link
                  onClick={scrollToTop}
                  to={`/AgentDetailsPage/${response?.agent.id}`}
                  key={response?.agent.id}
                >
                  <Styledimg src={response?.agent.image.url} alt=""></Styledimg>
                </Link>
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
              <div className="Flex-directionColumn Gap-10">
                <Heading
                  title={response?.agent.name}
                  size="24"
                  weight="bold"
                  as="h3"
                  lineheight="32"
                  color="2A2C30"
                ></Heading>
                <Paragraph
                  text={response?.agent.title}
                  size="18"
                  as="p"
                  lineheight="30"
                  color="7B7B7B"
                ></Paragraph>
                <StyledGrayBox></StyledGrayBox>
                <div className="Flex Align-items-center Gap-10">
                  <BsFillTelephoneFill></BsFillTelephoneFill>
                  <Paragraph
                    text={response?.agent.phone}
                    size="18"
                    as="p"
                    lineheight="30"
                    color="333333"
                  ></Paragraph>
                </div>
                <div className="Flex Align-items-center Gap-10">
                  <BiSolidPaperPlane></BiSolidPaperPlane>
                  <Paragraph
                    text={response?.agent.email}
                    size="18"
                    as="p"
                    lineheight="30"
                    color="333333"
                  ></Paragraph>
                </div>
              </div>
            </StyledAgentCard>
          </StyledAgentCardWrapper>
        </div>
      </StyledWrapper>
      <FooterMenu></FooterMenu>
    </>
  );

  return renderDetailsPage();
};

export default DetailsPage;
