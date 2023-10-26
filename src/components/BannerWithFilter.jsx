import styled from "styled-components";

const StyledBannerHeading = styled((props) => props.as)`
  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => props.weight};
  font-family: ${(props) => props.family};
  color: #${(props) => props.color};
  line-height: ${(props) => props.lineheight}px;
  width: ${(props) => props.width}px;
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

const BannerWithFilter = (props) => {
  return (
    <NewsLetterFilter>
      <StyledBannerHeading {...props}>{props.title}</StyledBannerHeading>;
    </NewsLetterFilter>
  );
};

export default BannerWithFilter;
