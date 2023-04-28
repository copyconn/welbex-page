import React from "react";
import styled from "styled-components";

import { Info } from "./Info";

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
  border: 1px solid yellow;
`

const Caption = styled.div`
  width: 50%;
  border: 1px solid blue;
  height: 517px;
  padding-top: 61px;
  display: flex;
  flex-direction: column;
`

const Title = styled.span`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 58px;
  color: #E4E5EA;
`

const Gradient = styled.span`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  line-height: 52px;
  background: linear-gradient(45deg, #FCB045 10%, #FF3F78 60%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Text = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #E4E5EA;
  margin-top: 30px;
`