import React from "react";
import styled from "styled-components";

import logo from '../../../assets/icons/logo.svg'
import name from '../../../assets/icons/name.svg'

export const Logo = () => {
    return (
        <Container>
            <LogoBox>
                <img src={logo} alt='logo'/>
                <img src={name} alt='name'/>
            </LogoBox>
            крупный интегратор CRM <br/>в России и ещё 8 странах
        </Container>
    )
}

const Container = styled.div`
  color: #E4E5EA;

  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 11px;
  line-height: 12px;
  margin-top: 11px;
`

const LogoBox = styled.div`
  display: flex;
  gap: 8px;
  width: 140px;
`