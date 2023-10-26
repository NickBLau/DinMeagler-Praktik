import styled from "styled-components";
import { Link } from "react-router-dom";
const StyledBannerHeading = styled((props) => props.as)`
  font-size: 24px;
  line-height: 50px;
  color: white;
`;

const StyledBannerHome = styled((props) => props.as)`
  font-size: 18px;
  line-height: 30px;
  color: white;
`;

const StyledBannerLogin = styled((props) => props.as)`
  font-size: 18px;
  line-height: 30px;
  color: #4976aa;
`;

const NewsLetterFilter = styled.div`
  background-color: rgba(32, 40, 49, 0.9);
  height: 100%;
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  text-align: center;
`;

const StyledWhiteBorder = styled.div`
  width: 2px;
  height: 14px;
  display: flex;
  align-self: center;
  background-color: white;
`;

const BannerWithFilter = (props) => {
  return (
    <NewsLetterFilter>
      <div className="Flex-directionColumn">
        <StyledBannerHeading {...props}>{props.title}</StyledBannerHeading>
        <div className="Flex Space-evenly">
          <Link to="/HomePage">
            <StyledBannerHome {...props}>{props.text}</StyledBannerHome>
          </Link>
          <StyledWhiteBorder></StyledWhiteBorder>

          <StyledBannerLogin {...props}>{props.description} </StyledBannerLogin>
        </div>
      </div>
    </NewsLetterFilter>
  );
};

export default BannerWithFilter;
