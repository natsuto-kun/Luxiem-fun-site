import * as React from "react"
import styled from "styled-components";
import IkePage from "../components/domain/Ike";
import { Layout } from "../layouts";

const Ike: React.VFC = () => {
    return (
        <>
          <Layout>
            <IkePage></IkePage>
          </Layout>
        </>
    );
}

export default Ike;