import * as React from "react"
import styled from "styled-components";
import VoxPage from "../components/domain/Vox";
import { Layout } from "../layouts";

const Vox: React.VFC = () => {
    return (
        <>
          <Layout>
            <VoxPage></VoxPage>
          </Layout>
        </>
    );
}

export default Vox;