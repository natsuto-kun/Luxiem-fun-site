import { FC } from 'react';
import * as React from "react"
import styled from "styled-components";
import { Header } from "../components/header";
import "modern-css-reset";
import { Link } from "gatsby";
import Ike from "./Ike";
import Luca from "./Luca";
import Mysta from "./Mysta";
import Shu from "./Shu";
import Vox from "./Vox";
import TopPage from "./TopPage";

// styles
const MemberPage = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
`

// markup
const IndexPage: FC = () => {
  return (
    <main>
      <Header></Header>
      <MemberPage>
        <Link to="/TopPage">TopPage</Link>
        <Link to="/Ike">Ike</Link>
        <Link to="/Luca">Luca</Link>
        <Link to="/Mysta">Mysta</Link>
        <Link to="/Shu">Shu</Link>
        <Link to="/Vox">Vox</Link>
      </MemberPage>
    </main>
  )
}

export default IndexPage
