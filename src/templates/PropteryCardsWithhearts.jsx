import styled from "styled-components";

import React, { useEffect, useState } from "react";
import axios from "axios";
import useLocalStorage from "../components/useLocalStorage";
import Heading from "../components/HeadingProp";
import Paragraph from "../components/ParagraphProp";

import Rating from "../components/Rating";
import FavButton from "../components/FavoriteButton";
import { Link } from "react-router-dom";

const ImageBox = styled.div`
  width: 540px;
  height: 225px;
  gap: 100px;
`;

const StyledPropertyCard = styled.article`
  width: 540px;
  height: 600px;
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 540px;
  height: 360px;
`;

const StyledPropertyHeader = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #2a2c30;
  line-height: 30px;
  margin-top: 25px;
  text-align: start;
`;

const StyledPropertyParagraph = styled.p`
  font-size: 16px;
  color: #333333;
  line-height: 28px;
  margin-top: 25px;
  text-align: start;
`;

const GrayBorder = styled.div`
  border-bottom: 1px solid #d3dee8;
`;

const ImgGrid = styled.div`
  display: grid;
  grid-template-columns: 80% 1fr 1fr;
`;

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const PropertyCards = () => {
  const [response, setResponse] = useState([]);
  const [name] = useLocalStorage("name", "");
  const [value] = useLocalStorage("value", "");

  useEffect(() => {
    const fetchData = async () => {
      console.log("render");
      try {
        const options = {
          method: "GET",
          url: `https://dinmaegler.onrender.com/homes?type_eq=${name}&price_gte=${value[0]}&price_lte=${value[1]}`,
          // url: `https://dinmaegler.onrender.com/homes?price_gte=${value[0]}&price_lte=${value[1]} `,
          // `https://dinmaegler.onrender.com/homes?type_eq=Villa`
          // https://dinmaegler.onrender.com/homes?type_eq=${name}&${value[0]}&price_lte=${value[1]}
          // `https://dinmaegler.onrender.com/homes?type_eq=${name}`,https://dinmaegler.onrender.com/homes?type_eq=${name}&{100}&price_lte={600000}
          // https://dinmaegler.onrender.com/homes?type_eq=Villa&price_gte=4000000&price_lte=6000000
          // url: "https://dinmaegler.onrender.com/homes?price_gte=510&price_lte=5000010",
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
        <StyledPropertyCard key={index}>
          {/* {data.filter.filter.includes("143")} */}

          <ImageBox>
            <ImgGrid>
              <Link to={`/DetailsPage/${data.id}`} key={data.id}>
                <StyledImg
                  onClick={scrollToTop}
                  src={data?.images[0].url}
                  alt=""
                  srcSet=""
                />{" "}
              </Link>
              <FavButton></FavButton>
            </ImgGrid>
            <div className="Margin-left-25">
              <StyledPropertyHeader>{data?.adress1}</StyledPropertyHeader>
              <StyledPropertyParagraph>{data?.city}</StyledPropertyParagraph>
              <div className="Flex Align-self-center">
                <StyledPropertyHeader>{data?.type + " •"}</StyledPropertyHeader>
                <div className="Padding-2">
                  <StyledPropertyParagraph>
                    {"Ejerudgift: " + data?.cost}
                  </StyledPropertyParagraph>
                </div>
              </div>
              <GrayBorder className="Margin-top-20"></GrayBorder>
              <div className="Flex Space-between">
                <div className="Flex">
                  <div>
                    <Rating value={data?.energylabel}></Rating>
                  </div>
                  <div className="Center Margin-left-30">
                    <StyledPropertyParagraph>
                      {data?.rooms +
                        " værelser" +
                        " • " +
                        data?.livingspace +
                        " m²"}
                    </StyledPropertyParagraph>
                  </div>
                </div>
                <div className="Center Margin-right-25">
                  <StyledPropertyHeader>
                    {"Kr. " + data?.price.toLocaleString()}
                  </StyledPropertyHeader>
                </div>
              </div>
            </div>
          </ImageBox>
        </StyledPropertyCard>
      ))}
    </>
  );
};

export default PropertyCards;
