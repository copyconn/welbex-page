import React from "react";
import styled from "styled-components";

import { Info } from "./Info";

import bgImg from '../../assets/icons/bg.svg'

export const Main = () => {
    return (
        <Container>
            <Caption>
                <Title>Зарабатывайте <br/>больше</Title>
                <Gradient>с WELBEX</Gradient>
                <Text>Развиваем и контролируем <br/>продажи за вас</Text>
            </Caption>
            <Info/>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  width: 1140px;

  @media (max-width: 700px) {
    flex-direction: column;
    width: 100vw;
    background: url(${bgImg});
    background-size: 100%;
    padding-left: 14px;
    box-sizing: border-box;
    height: 445px;
    margin-top: 55px;
  }
`

const Caption = styled.div`
  width: 50%;
  height: 517px;
  padding-top: 61px;
  display: flex;
  flex-direction: column;

  @media (max-width: 700px) {
    width: 100%;
    height: 50%;
    padding-top: 40px;
  }
`

const Title = styled.span`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 58px;
  color: #E4E5EA;

  @media (max-width: 700px) {
    font-size: 36px;
    line-height: 44px;
  }
`

const Gradient = styled.span`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  line-height: 58px;
  background: linear-gradient(45deg, #FCB045 10%, #FF3F78 60%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 700px) {
    font-size: 36px;
    line-height: 44px;
  }
`

const Text = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #E4E5EA;
  margin-top: 30px;

  @media (max-width: 700px) {
    margin-top: 15px;
  }
`