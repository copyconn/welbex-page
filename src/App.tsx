import React from 'react';
import styled from "styled-components";

import { Footer, Header, Main } from "./modules";

import purpleBall from './assets/icons/purple_ball.svg'
import redBallSmall from './assets/icons/red_ball_small.svg'

function App() {
    return (
        <Container>
            <LightsDesc>
                <img src={purpleBall}
                     style={{ position: 'absolute', left: '56%', top: '-2px' }}/>
                <PurpleLight/>
                <RedLight/>
                <img src={redBallSmall}
                     style={{ position: 'absolute', left: '55%', top: '490px' }}/>
            </LightsDesc>
            <Content>
                <Header/>
                <Main/>
                <Footer/>
            </Content>
        </Container>
    );
}

export default App;

const Container = styled.div`
  background: #0E1014;
  width: 100%;
  padding-top: 46px;

  @media (max-width: 700px) {
    padding-top: 0;
  }
`

const Content = styled.div`
  width: 1238px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media (max-width: 700px) {
    width: 100%;
  }
`

const LightsDesc = styled.div`
  @media (max-width: 700px) {
    display: none;
  }
`

const PurpleLight = styled.div`
  position: absolute;
  width: 259px;
  height: 259px;
  left: 602px;
  top: -154px;
  background: #833AB4;
  opacity: 0.5;
  filter: blur(196px);
`

const RedLight = styled.div`
  position: absolute;
  width: 311px;
  height: 311px;
  left: 102px;
  top: 251px;
  background: #961A1A;
  opacity: 0.5;
  filter: blur(196px);
`