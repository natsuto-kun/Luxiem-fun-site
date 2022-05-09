import * as React from "react"
import styled from "styled-components";
import "modern-css-reset";
import { Link } from "gatsby";
import { Layout } from "../layouts";
import Top from "./Top";

// styles
const MemberPage = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
`

// markup
const IndexPage: React.VFC = () => {
  return (
    <Layout>
      <MemberPage>
        <Top></Top>
        <Link to="/Ike">Ike</Link>
        <Link to="/Luca">Luca</Link>
        <Link to="/Mysta">Mysta</Link>
        <Link to="/Shu">Shu</Link>
        <Link to="/Vox">Vox</Link>
      </MemberPage>
    </Layout>
  )
}

export default IndexPage
