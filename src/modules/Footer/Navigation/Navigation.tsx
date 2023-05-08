import React from "react";
import styled from "styled-components";

export const Navigation = () => {
    return (
        <Container>
            <Section style={{ marginRight: '98px' }}>
                <Title>о компании</Title>
                <Item>Партнёрская программа</Item>
                <Item>Вакансии</Item>
            </Section>

            <Section style={{ flexDirection: 'row', gap: '52px' }}>
                <Column>
                    <Title>меню</Title>
                    <Item>Расчёт стоимости</Item>
                    <Item>Услуги</Item>
                    <Item>Виджеты</Item>
                    <Item>Интеграции</Item>
                    <Item>Наши клиенты</Item>
                </Column>
                <Column>
                    <Title/>
                    <Item>Кейсы</Item>
                    <Item>Благодарственные письма</Item>
                    <Item>Сертификаты</Item>
                    <Item>Блог на Youtube</Item>
                    <Item>Вопрос / Ответ</Item>
                </Column>
            </Section>
        </Container>
    )
}

const Container = styled.div`
  display: flex;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
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

const Item = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  color: #E4E5EA;
  margin-bottom: 10px;
`