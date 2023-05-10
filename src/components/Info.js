import React from "react"
import styled from "styled-components/macro"
import color from "../constant/color"

const Info = ({ icon, title, info }) => {
  return (
    <Container>
      <Icon>
        <i class={`ph ${icon}`}></i>
      </Icon>
      <Content>
        <p>{title}</p>
        <span>{info}</span>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 24px;
  background: ${color.gray50};
  border-radius: 10px;
  /* border: 1px solid ${color.gray200}; */
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
`
const Icon = styled.div`
  min-width: 50px;
  height: 50px;
  border-radius: 6px;
  background: #dbeafe;
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    font-size: 28px;
    color: ${color.primary};
  }
`

const Content = styled.div`
  p {
    color: ${color.primary};
    margin-bottom: 6px;
    font-weight: 500;
  }
  span {
    font-size: 14px;
    color: ${color.gray600};
  }
`

export default Info
