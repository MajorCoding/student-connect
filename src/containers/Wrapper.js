import React from "react"
import styled from "styled-components/macro"

const Wrapper = ({ children }) => {
  return <Container>{children}</Container>
}

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;

  @media (min-width: 640px) {
    width: 640px;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    width: 768px;
    padding: 0 24px;
  }

  @media (min-width: 1024px) {
    width: 1024px;
    padding: 0 80px;
  }

  @media (min-width: 1280px) {
    width: 1280px;
    padding: 0 80px;
  }
`

export default Wrapper
