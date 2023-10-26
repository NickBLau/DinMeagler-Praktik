import styled from "styled-components";
import Heading from "../components/HeadingProp";
import Paragraph from "../components/ParagraphProp";
import Rating from "../components/Rating";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const StyledFlexWrap = styled.div`
  gap: 1px;
`;

const ImageBox = styled.div`
  width: 540px;
  height: 225px;
  gap: 100px;
`;

const StyledImg = styled.img`
  width: 540px;
  height: 300px;
`;

const StyledPropertyCard = styled.article`
  width: 540px;
  height: 580px;
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
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

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const PropertyCards = () => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "GET",
          url: "https://dinmaegler.onrender.com/homes?_limit=4&_start=2",
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
        <StyledFlexWrap key={index} onClick={scrollToTop}>
          <Link to={`/DetailsPage/${data.id}`} key={data.id}>
            <StyledPropertyCard>
              <ImageBox>
                <StyledImg src={data?.images[0].url} alt="" srcSet="" />

                <div className="Margin-left-25">
                  <StyledPropertyHeader>{data?.adress1}</StyledPropertyHeader>
                  <StyledPropertyParagraph>
                    {data?.city}
                  </StyledPropertyParagraph>
                  <div className="Flex Align-self-center">
                    <StyledPropertyHeader>{data?.type} •</StyledPropertyHeader>
                    <div className="Padding-2">
                      <StyledPropertyParagraph>
                        Ejerudgift: {data?.cost.toLocaleString()} kr.
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
                          {data?.rooms} værelser • {data?.livingspace} m²
                        </StyledPropertyParagraph>
                      </div>
                    </div>
                    <div className="Center Margin-right-25">
                      <StyledPropertyHeader>
                        Kr. {data?.price.toLocaleString()}
                      </StyledPropertyHeader>
                    </div>
                  </div>
                </div>
              </ImageBox>
            </StyledPropertyCard>
          </Link>
        </StyledFlexWrap>
      ))}
    </>
  );
};

export default PropertyCards;
