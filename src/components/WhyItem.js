import React from "react"
import styled from "styled-components/macro"
import color from "../constant/color"

const WhyItem = ({ icon, title, disc }) => {
  return (
    <Container>
      <Icon title={title}>
        <i class={`ph ${icon}`}></i>
      </Icon>
      <Content>
        <h4>{title}</h4>
        <p>{disc}</p>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
`
const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  background: ${({ title }) => {
    if (title.toLowerCase() === "attention") {
      return "#FEFCE8"
    } else if (title.toLowerCase() === "problem solving") {
      return "#F0F9FF"
    } else if (title.toLowerCase() === "exams") {
      return "#F0FDF4"
    } else if (title.toLowerCase() === "separate") {
      return "#F5F3FF"
    } else if (title.toLowerCase() === "foundation") {
      return "#FDF4FF"
    } else if (title.toLowerCase() === "meeting") {
      return "#F7FEE7"
    }
  }};
  border: 1px solid
    ${({ title }) => {
      if (title.toLowerCase() === "attention") {
        return "#fde047"
      } else if (title.toLowerCase() === "problem solving") {
        return "#7DD3FC"
      } else if (title.toLowerCase() === "exams") {
        return "#86EFAC"
      } else if (title.toLowerCase() === "separate") {
        return "#C4B5FD"
      } else if (title.toLowerCase() === "foundation") {
        return "#F0ABFC"
      } else if (title.toLowerCase() === "meeting") {
        return "#BEF264"
      }
    }};

  i {
    font-size: 24px;
    color: ${({ title }) => {
      if (title.toLowerCase() === "attention") {
        return "#EAB308"
      } else if (title.toLowerCase() === "problem solving") {
        return "#0284C7"
      } else if (title.toLowerCase() === "exams") {
        return "#16A34A"
      } else if (title.toLowerCase() === "separate") {
        return "#7C3AED"
      } else if (title.toLowerCase() === "foundation") {
        return "#C026D3"
      } else if (title.toLowerCase() === "meeting") {
        return "#65A30D"
      }
    }};
  }
`
const Content = styled.div`
  h4 {
    font-size: 16px;
    margin-bottom: 6px;
    color: ${color.gray800};
  }
  p {
    font-size: 15px;
    color: ${color.gray500};
    font-weight: 500;
  }
`

export default WhyItem
