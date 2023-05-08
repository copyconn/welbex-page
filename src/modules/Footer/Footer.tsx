import React from "react";
import styled from "styled-components";

import { Navigation } from "./Navigation";
import { ContactsDetailed } from "./ContactsDetailed";

export const Footer = () => {
    return (
        <Container>
            <Navigation/>
            <ContactsDetailed/>
        </Container>
    )
}

const Container = styled.div`
  width: 1140px;
  padding: 55px 0 20px;
  display: flex;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  color: #E4E5EA;
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-direction: column;
    width: 100vw;
  }
`