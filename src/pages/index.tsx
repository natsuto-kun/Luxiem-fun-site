import * as React from "react"
import styled from "styled-components";
import "modern-css-reset";
import { Link } from "gatsby";
import { Layout } from "../layouts";
import Top from "./Top";

// styles
const MemberPage = styled.div`

`

// markup
const IndexPage: React.VFC = () => {
  return (
    <Layout>
      <MemberPage>
        <Top></Top>
      </MemberPage>
    </Layout>
  )
}

export default IndexPage
