import React from "react";
import styled from "styled-components";

export const Info = () => {
    return (
        <Container>
            <Text>Вместе с <Gradient>бесплатной</Gradient></Text>
            <Text><Gradient>консультацией</Gradient> мы дарим:</Text>

            <Grid>
                <Item>
                    <Title>виджеты</Title>
                    <ItemText>30 готовых<br/>решений</ItemText>

                    <MobileTitle><Dash>—</Dash> skype аудит</MobileTitle>
                </Item>
                <Item>
                    <Title>dashboard</Title>
                    <ItemText>с показателями<br/>вашего бизнеса</ItemText>

                    <MobileTitle><Dash>—</Dash> 30 виджетов</MobileTitle>
                </Item>
                <Item>
                    <Title>skype аудит</Title>
                    <ItemText>отдела продаж<br/>и CRM системы</ItemText>

                    <MobileTitle><Dash>—</Dash> dashboard</MobileTitle>
                </Item>
                <Item>
                    <Title>35 дней</Title>
                    <ItemText>использования<br/>CRM</ItemText>

                    <MobileTitle><Dash>—</Dash> месяц amocrm</MobileTitle>
                </Item>
            </Grid>

            <Button>Получить консультацию</Button>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  color: #E4E5EA;
  height: 100%;
  width: 50%;
  margin-top: 76px;

  @media (max-width: 700px) {
    width: 100%;
    align-items: flex-start;
    margin-top: 45px;
  }
`

const Text = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
`

const Gradient = styled.span`
  background: linear-gradient(45deg, #FCB045 10%, #FF3F78 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  font-weight: 600;
`

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  margin: 40px 0 61px;
  text-align: right;
  gap: 30px;

  @media (max-width: 700px) {
    width: 100%;
    margin: 20px 0 55px;
    gap: 10px;
  }
`

const Item = styled.div`
  width: 135px;

  @media (max-width: 700px) {
    width: 44%;
  }
`

const Title = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 6px;

  @media (max-width: 700px) {
    display: none;
  }
`

const MobileTitle = styled.span`
  display: none;

  @media (max-width: 700px) {
    display: block;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #E4E5EA;
    text-align: left;
    margin-bottom: 4px;
  }
`

const Dash = styled.span`
  background: linear-gradient(45deg, #FCB045 20%, #FF3F78 60%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const ItemText = styled.div`
  text-align: right;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  @media (max-width: 700px) {
    display: none;
  }
`

const Button = styled.button`
  width: 262px;
  height: 61px;
  background: #4077F3;
  border: none;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #E4E5EA;

  @media (max-width: 700px) {
    display: none;
  }
`

