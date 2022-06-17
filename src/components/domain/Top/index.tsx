import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const TopWrapper = styled.div`
  background: #343434;
  width: 100%;
  height: 100%;
`

const TopImage = styled.div`
  left: 0;
  width: 80vw;
  height: 500px;
  background: #C4C4C4;
  border-radius: 0px 0px 40px 0px;
`

export const TopText = styled.div`
  color: var(--white-text);
  font-size: 18px;
  font-weight: bold;
`

const TopPage: React.VFC = () => {
  return (
    <>
      <TopWrapper>
        <TopText>I looooooooove Luxiem!!!!!</TopText>
        <Link to="/Ike">Ike</Link>
        <Link to="/Luca">Luca</Link>
        <Link to="/Mysta">Mysta</Link>
        <Link to="/Shu">Shu</Link>
        <Link to="/Vox">Vox</Link>
      </TopWrapper>
    </>
  );
};

export default TopPage;