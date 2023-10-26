import styled from "styled-components";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactSlider from "react-slider";
import { throttle } from "lodash";
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

const StyledWrapper = styled.div`
  max-width: 1920px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 130px;
  margin-bottom: 50px;
`;

const StyledPriceP = styled.p`
  font-size: 18px;
  line-height: 28px;
  color: #7b7b7b;
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

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 15px;
`;

const SearchBox = styled.div`
  width: 1160px;
  height: 147px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 75px;
`;

const StyledDecorativeLine = styled.div`
  width: 43px;
  height: 2px;
  background-color: #162a41;
  margin-top: 10px;
  margin-bottom: 20px;
  outline: 2px solid #162a41;
`;

const StyledSelect = styled.select`
  color: #7b7b7b;
  font-size: 16px;
  line-height: 28px;
  border: 1px solid lightgray;
  width: 300px;
  height: 45px;
  padding-left: 10px;
`;

const StyledFlexWrap = styled.div`
  width: 1160px;
  gap: 50px;
  display: flex;
  flex-wrap: wrap;
`;

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const BoligerTilSalgTest = () => {
  const [value, setValue] = useLocalStorage("value", "");
  const [name, setName] = useLocalStorage("name", "");
  const [response, setResponse] = useState([]);

  const [localStorageValue, setLocalStorageValue] = useState(
    localStorage.getItem("value")
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setLocalStorageValue(localStorage.getItem("value"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "GET",
          url: `https://dinmaegler.onrender.com/homes?type_eq=${name}&price_gte=${value[0]}&price_lte=${value[1]}`,
        };

        const { data } = await axios.request(options);

        setResponse(data);
      } catch (error) {}
    };

    fetchData();
  }, [name, value, localStorageValue]);

  const handleSliderChange = (newValue) => {
    setValue(newValue);
  };

  const throttledHandleSliderChange = throttle(handleSliderChange, 1000, {
    leading: true,
    trailing: true,
  });

  return (
    <>
      <StyledWrapper>
        <SearchBox>
          <Heading
            title={"Søg efter dit drømmehus"}
            size="20"
            weight="600"
            as="h3"
            color="2A2C30"
            lineheight="30"
          ></Heading>
          <StyledDecorativeLine></StyledDecorativeLine>
          <form className="Flex Gap-25 Align-items-center">
            <StyledLabel>
              Ejendomstype
              <StyledSelect
                type="select"
                value={name}
                onChange={(e) => setName(e.target.value)}
              >
                <option value="Villa">Villa</option>
                <option value="Byhus">Byhus</option>
                <option value="Ejerlejlighed">Ejerlejlighed</option>
                <option value="Landejendom">Landejendom</option>
              </StyledSelect>
            </StyledLabel>
            <div className="Flex-directionColumn ">
              <div className="Margin-top-5">
                <Heading
                  title={"Pris-interval"}
                  size="16"
                  weight="200"
                  as="h4"
                  color="333333"
                  lineheight="28"
                ></Heading>
              </div>
              <ReactSlider
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                defaultValue={[value[0], value[1]]}
                min={100000}
                max={12000000}
                ariaLabel={["Lower thumb", "Upper thumb"]}
                pearling
                onChange={(value, index) => {
                  throttledHandleSliderChange(value);
                  console.log(
                    "🚀 ~ file: PriceSlider.jsx:28 ~ PriceSlider ~ value:",
                    value
                  );
                }}
              />
              <div className="Flex Space-between width-100%">
                <StyledPriceP>{value[0].toLocaleString()} kr.</StyledPriceP>
                <StyledPriceP>{value[1].toLocaleString()}kr.</StyledPriceP>
              </div>
            </div>
          </form>
        </SearchBox>
        <StyledFlexWrap>
          {response.map((data, index) => (
            <StyledPropertyCard key={index}>
              <ImageBox>
                <ImgGrid>
                  <Link to={`/DetailsPage/${data.id}`} key={data.id}>
                    <StyledImg
                      onClick={scrollToTop}
                      src={data?.images[0].url}
                      alt=""
                      srcSet=""
                    />
                  </Link>
                  <FavButton></FavButton>
                </ImgGrid>
                <div className="Margin-left-25">
                  <StyledPropertyHeader>{data?.adress1}</StyledPropertyHeader>
                  <StyledPropertyParagraph>
                    {data?.city}
                  </StyledPropertyParagraph>
                  <div className="Flex Align-self-center">
                    <StyledPropertyHeader>
                      {data?.type + " •"}
                    </StyledPropertyHeader>
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
        </StyledFlexWrap>
      </StyledWrapper>
    </>
  );
};

export default BoligerTilSalgTest;
