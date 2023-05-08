import React from "react";
import styled from "styled-components";

import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { Contacts } from "./Contacts";

import redBallBig from '../../assets/icons/red_ball_big.svg'

export const Header = () => {
    return (
        <>
            <Container>
                <Logo/>
                <Menu/>
                <img src={redBallBig}
                     style={{
                         position: 'absolute',
                         width: '90px',
                         height: '90px',
                         left: '36%', //42em
                         top: '50px',
                     }}/>
                <Contacts/>
            </Container>

            <MobileHeader>
                <span>услуги</span>
                <span>виджеты</span>
                <span>интеграции</span>
                <span>кейсы</span>
            </MobileHeader>
        </>
    )
}

const Container = styled.div`
  height: 73px;
  display: flex;
  width: 1140px;
  padding-left: 98px;

  @media (max-width: 700px) {
    display: none;
  }
`

const MobileHeader = styled.div`
  display: none;

  @media (max-width: 700px) {
    display: flex;
    height: 55px;
    width: 100%;
    padding: 20px 16px;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-transform: uppercase;
    color: #E4E5EA;
    justify-content: space-between;
    position: fixed;
    top: 0;
    background: #0E1014;
  }
`