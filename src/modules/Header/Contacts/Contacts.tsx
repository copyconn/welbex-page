import React from "react";
import styled from "styled-components";

import telegram from '../../../assets/icons/telegram.svg'
import viber from '../../../assets/icons/viber.svg'
import whatsapp from '../../../assets/icons/whatsapp.svg'

export const Contacts = () => {
    return (
        <Container>
            +7 555 555-55-55
            <Icons>
                <Image src={telegram} alt='telegram'/>
                <Image src={viber} alt='viber'/>
                <Image src={whatsapp} alt='whatsapp'/>
            </Icons>
        </Container>
    )
}

const Container = styled.div`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #E4E5EA;
  margin-top: 15px;
  height: 20px;
  display: flex;
`

const Icons = styled.div`
  display: flex;
  gap: 30px;
  margin-left: 47px;
`

const Image = styled.img`
  width: 16px;
  height: 16px;
`