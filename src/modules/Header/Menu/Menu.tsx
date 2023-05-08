import React from "react";
import styled from "styled-components";

export const Menu = () => {
    return (
        <Container>
            <span>Услуги</span>
            <span>Виджеты</span>
            <span>Интеграции</span>
            <span>Кейсы</span>
            <span>Сертификаты</span>
        </Container>
    )
}

const Container = styled.div`
  width: 503px;
  height: 19px;
  margin: 15px 137px 0 52px;
  display: flex;
  gap: 33px;
  color: #E4E5EA;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  z-index: 1;
`

