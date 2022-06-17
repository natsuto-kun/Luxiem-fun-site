import * as React from "react"
import styled from "styled-components";
import MystaPage from "../components/domain/Mysta";
import { Layout } from "../layouts";

const Mysta: React.VFC = () => {
    return (
        <>
          <Layout>
            <MystaPage></MystaPage>
          </Layout>
        </>
    );
}

export default Mysta;