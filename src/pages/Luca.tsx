import * as React from "react"
import styled from "styled-components";
import LucaPage from "../components/domain/Luca";
import { Layout } from "../layouts";

const Luca: React.VFC = () => {
    return (
        <>
          <Layout>
            <LucaPage></LucaPage>
          </Layout>
        </>
    );
}

export default Luca;