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
                <p>header</p>
            </HeaderWrapper>
        </SiteHeader>
    );
}