import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Heading from "./HeadingProp";
import Paragraph from "./ParagraphProp";
import Rating from "./Rating";
import Button from "./ButtonProp";

const StyledArticle = styled.article`
  max-width: 1920px;
  height: 204px;
  background-color: white;
  padding: 35px 35px 35px 10px;
  border: 1px solid gray;
  display: flex;
  box-shadow: rgba(170, 170, 170, 0.3) 0px 10px 15px 0px;
`;

const ImageBox = styled.figure`
  width: 282px;
  height: 137px;
`;

const Img = styled.img`
  width: 282px;
  height: 137px;
  object-fit: scale-down;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledDiv = styled.div`
  height: 32px;
  display: flex;
  text-align: center;
  align-items: center;
  gap: 20px;
`;

const Wrapper = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  gap: 55px;
  margin-top: 120px;
`;

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const PropteryCardHorizontal = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "GET",
          url: "https://dinmaegler.onrender.com/homes",
        };

        const { data } = await axios.request(options);
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
        <StyledArticle key={index}>
          <Link to={`/DetailsPage/${data.id}`} key={data.id}>
            <ImageBox onClick={scrollToTop}>
              <Img src={data?.images[0].url} />
            </ImageBox>
          </Link>
          <StyledSection>
            <Heading
              title={data?.adress1}
              size="20"
              weight="bold"
              as="h2"
              color="2A2C30"
              lineheight="30"
            />
            <Paragraph
              text={data?.city}
              size="16"
              as="p"
              lineheight="28"
              color="333333"
            />
            <div className="Flex Width-300 Align-items-center Gap-2">
              <Heading
                title={data?.type + " • "}
                size="20"
                weight="bold"
                as="h2"
                color="2A2C30"
                lineheight="30"
              />
              <Paragraph
                text={"Ejerudgift: " + data?.cost}
                size="16"
                as="p"
                lineheight="28"
                color="333333"
              />
            </div>
          </StyledSection>
          <StyledDiv>
            <div>
              <Rating value={data?.energylabel}></Rating>
            </div>
            <Paragraph
              className="flex"
              text={
                data?.rooms + " værelser" + " • " + data?.livingspace + " m²"
              }
              size="16"
              as="p"
              lineheight="28"
              color="333333"
              width="200"
            />
            <Wrapper>
              <Heading
                title={"Kr. " + data?.payment.toLocaleString()}
                size="20"
                weight="bold"
                as="h2"
                color="2A2C30"
                lineheight="30"
                width="200"
                height="30"
              />
              <Button
                text={"Fjern fra favoritter"}
                size="18"
                as="button"
                lineheight="30"
                color="FFFFFF"
                width="210"
                height="62"
                backgroundcolor="162A41"
              />
            </Wrapper>
          </StyledDiv>
        </StyledArticle>
      ))}
    </>
  );
};

export default PropteryCardHorizontal;
