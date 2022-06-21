import * as React from "react"
import styled from "styled-components";

const SiteHeader = styled.div`
  position: sticky;
  height: 80px;
  width: 100%;
  top: 0px;
`

const HeaderWrapper = styled.div`
  background-color: var(--header-color);
  height: 100%;
`


export const Header = () => {
    return (
        <SiteHeader>
            <HeaderWrapper>
                <img src = "https://raw.githubusercontent.com/natsuto-kun/Luxiem-fun-site/f57e66d816690ee58f561eabdfa0e35b6e6311f5/src/images/header-logo-black.svg"/>
            </HeaderWrapper>
        </SiteHeader>
    );
}