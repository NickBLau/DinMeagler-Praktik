import styled from "styled-components";
import Heading from "./HeadingProp";
import Paragraph from "./ParagraphProp";
import Rating from "./RatingProp";

const StyledFlexWrap = styled.div`
  width: 1110px;
  gap: 30px;
  display: flex;
  flex-wrap: wrap;
`;

const ImageBox = styled.div`
  width: 540px;
  height: 225px;
  gap: 10px;
  background-color: red;
`;

const StyledPropertyCard = styled.article`
  width: 540px;
  height: 500px;
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  box-shadow: rgba(170, 170, 170, 0.3) 0px 10px 15px 0px;
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

const ProperyCard = () => {
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
      {" "}
      {response.map((data, index) => (
        <StyledFlexWrap key={index}>
          <StyledPropertyCard>
            <ImageBox>
              <img src="propertyCardImage1.png" alt="" srcSet="" />
              <div className="Margin-left-25">
                <StyledPropertyHeader>Klosterengen 234</StyledPropertyHeader>
                <StyledPropertyParagraph>4000 Roskilde</StyledPropertyParagraph>
                <div className="Flex Align-self-center">
                  <StyledPropertyHeader>Villa •</StyledPropertyHeader>
                  <div className="Padding-2">
                    <StyledPropertyParagraph>
                      Ejerudgift: 4.567 kr.
                    </StyledPropertyParagraph>
                  </div>
                </div>
                <GrayBorder className="Margin-top-20"></GrayBorder>
                <div className="Flex Space-between">
                  <div className="Flex">
                    <Rating
                      text={"A"}
                      size="20"
                      weight="600"
                      as="p"
                      lineheight="30"
                      color="FFFFFF"
                      width="30"
                      height="30"
                      margintop="30"
                      backgroundcolor="10AC84"
                    ></Rating>
                    <div></div>
                    <div className="Center Margin-left-30">
                      <StyledPropertyParagraph>
                        4 værelser • 156 m²
                      </StyledPropertyParagraph>
                    </div>
                  </div>
                  <div className="Center Margin-right-25">
                    <StyledPropertyHeader>Kr. 4.567.890</StyledPropertyHeader>
                  </div>
                </div>
              </div>
            </ImageBox>
          </StyledPropertyCard>
        </StyledFlexWrap>
      ))}
    </>
  );
};

export default ProperyCard;
