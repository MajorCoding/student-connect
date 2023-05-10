import React from "react"
import styled from "styled-components/macro"
import color from "../constant/color"
import Wrapper from "../containers/Wrapper"
import { Link } from "react-router-dom"

const Breadcrumb = ({ title }) => {
  return (
    <Container>
      <Wrapper>
        <List>
          <Item>Home</Item>
          <Item>{title}</Item>
        </List>
      </Wrapper>
    </Container>
  )
}

export default Breadcrumb

const Container = styled.div`
  width: 100%;
  padding: 12px 4px;
  background: #0f172a;
`

const List = styled.ul`
  display: flex;
  list-style: none;
`
const Item = styled.li`
  font-size: 14px;
  margin-right: 6px;
  font-weight: 500;
  color: ${color.secondary};
  :first-child {
    color: ${color.gray500};
  }

  &::after {
    content: "/";
    margin-left: 6px;
  }
  &:last-child::after {
    content: "";
    margin-left: 0px;
  }
  & a {
    font-weight: 400;
    color: #94a3b8;
  }
`
