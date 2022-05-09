import React, { ReactNode } from "react";
import { Header } from "../components/header";

type LayoutProps = Required<{
    readonly children: ReactNode;
}>;

export const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header></Header>
            <main>{children}</main>
        </>
    )
}