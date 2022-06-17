import React, { ReactNode } from "react";
import styled from "styled-components";
import { Header } from "../components/header";
import "./color.css";

type LayoutProps = Required<{
    readonly children: ReactNode;
}>;

const PageWrapper = styled.main`
  position: relative;
  background: #343434;
  width: 100%;
  height: 100vh;
`

export const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header></Header>
            <PageWrapper>{children}</PageWrapper>
        </>
    )
}