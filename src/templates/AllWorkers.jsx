import styled from "styled-components";

import WorkersCard from "../components/WorkersCard";
import BannerWithFilter from "../components/BannerWithFilterLarge";

const WorkerGridWrapper = styled.div`
  max-width: 1120px;
  height: 950px;
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  gap: 30px;

  flex-wrap: wrap;
  margin-top: 50px;
  margin-bottom: 50px;
`;
const AllWorkers = () => {
  return (
    <>
      <WorkerGridWrapper>
        <WorkersCard></WorkersCard>
      </WorkerGridWrapper>
    </>
  );
};

export default AllWorkers;
