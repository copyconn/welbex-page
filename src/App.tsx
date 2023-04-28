import React from 'react';
import styled from "styled-components";

import { Footer, Header, Main } from "./modules";

function App() {
    return (
        <Container>
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
  height: 100%;
  padding-top: 46px;
`

const Content = styled.div`
  width: 1238px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border: 1px solid green;
`