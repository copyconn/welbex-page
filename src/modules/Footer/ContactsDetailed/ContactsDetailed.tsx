import React from "react";
import styled from "styled-components";

import telegram from '../../../assets/icons/telegram.svg'
import viber from '../../../assets/icons/viber.svg'
import whatsapp from '../../../assets/icons/whatsapp.svg'

export const ContactsDetailed = () => {
    return (
        <Container>
            <Title>контакты</Title>
            <Number>+7 555 555-55-55</Number>
            <Icons>
                <Image src={telegram} alt='telegram'/>
                <Image src={viber} alt='viber'/>
                <Image src={whatsapp} alt='whatsapp'/>
            </Icons>
            <Address>Москва, Путевой проезд 3с1, к 902</Address>
            <Rights>©WELBEX 2022. Все права защищены.</Rights>
            <Rights style={{ textDecoration: 'underline' }}>Политика конфиденциальности</Rights>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 163px;
  align-items: flex-end;

  @media (max-width: 700px) {
    align-items: flex-start;
    margin-left: 0;
  }
`

const Title = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #656566;
  margin-bottom: 20px;
  height: 17px;
`

const Number = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  color: #E4E5EA;
`

const Icons = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0;
`

const Image = styled.img`
  width: 16px;
  height: 16px;
`

const Address = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 70px;
`

const Rights = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #E4E5EA;
`