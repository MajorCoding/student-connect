import React from "react"
import styled from "styled-components/macro"
import color from "../constant/color"
const Professor = ({ photo, name, education, ...rest }) => {
  return (
    <Container {...rest}>
      <Photo>
        <img src={photo} alt="professor" />
      </Photo>
      <Content>
        <Title>Professor</Title>
        <Name>{name}</Name>
        <Education>{education}</Education>
      </Content>
    </Container>
  )
}

export default Professor

const Container = styled.div`
  padding: 20px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
`

const Photo = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 6px;
  overflow: hidden;

  img {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 110px;
    height: 110px;
  }
`

const Content = styled.div`
  flex: 1;
`

const Title = styled.span`
  display: inline-block;
  font-size: 10px;
  padding: 4px 8px;
  color: ${color.gray300};
  background: ${color.gray800};
  margin-bottom: 6px;
  border-radius: 4px;
`
const Name = styled.h4`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 6px;
  color: #1e40af;
`

const Education = styled.p`
  font-size: 14px;
  color: ${color.gray600};
`
