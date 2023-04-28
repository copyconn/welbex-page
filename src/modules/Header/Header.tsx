import React from "react";
import styled from "styled-components";

import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { Contacts } from "./Contacts";

export const Header = () => {
    return (
        <Container>
            <Logo/>
            <Menu/>
            <Contacts/>
        </Container>
    )
}

const Container = styled.div`
  border: 1px solid white;
  height: 73px;
  display: flex;
  width: 1140px;
  padding-left: 98px;
`