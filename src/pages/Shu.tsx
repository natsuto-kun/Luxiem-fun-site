import * as React from "react"
import styled from "styled-components";
import ShuPage from "../components/domain/Shu";
import { Layout } from "../layouts";

const Shu: React.VFC = () => {
    return (
        <>
          <Layout>
            <ShuPage></ShuPage>
          </Layout>
        </>
    );
}

export default Shu;