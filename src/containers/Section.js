import React, { useState } from "react"
import styled from "styled-components/macro"
import Wrapper from "./Wrapper"
import color from "../constant/color"
const Section = ({ children, title, subtitle, disc, bg, ...rest }) => {
  return (
    <Container {...rest} bg={bg}>
      <Wrapper>
        {title && (
          <Header>
            <h3>{title}</h3>
            <span>{subtitle}</span>
            {disc && <p>{disc}</p>}
          </Header>
        )}
        {children}
      </Wrapper>
    </Container>
  )
}

Section.Achivers = function SectionAchivers({ children }) {
  const [width, setWidth] = useState(window.innerWidth)
  window.addEventListener("resize", function () {
    setWidth(window.innerWidth)
  })
  // eslint-disable-next-line
  return (
    <>
      <Achivers>{children}</Achivers>
      <AchieversPatter>
        {
          // eslint-disable-next-line
          <img
            src={
              width > 768
                ? "/assets/achievers-pattern.svg"
                : "/assets/achievers-pattern-yellow.svg"
            }
            alt="background-image"
          />
        }
      </AchieversPatter>
    </>
  )
}

Section.Timing = function SectionTiming({ children }) {
  return <Timing>{children}</Timing>
}

const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 60px 0;
  background: ${({ bg }) => (bg ? bg : "#fff")};
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  h3 {
    font-size: 24px;
    color: #1e40af;
    margin-bottom: 10px;
  }
  span {
    font-size: 14px;
    color: ${color.gray500};
  }

  p {
    margin-top: 24px;
    width: 100%;
    font-size: 15px;
    font-style: italic;
    font-weight: 400;
    line-height: 150%;
    color: ${color.gray500};
    font-weight: 500;
    text-align: center;
    margin-bottom: 24px;

    @media (min-width: 768px) {
      width: 80%;
      font-size: 15px;
    }
  }
`

const Achivers = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  z-index: 2;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
    padding-top: 40px;
    margin-top: 40px;
    gap: 80px;
  }
`
const AchieversPatter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 400px;
  opacity: 1;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: red; */

  img {
    margin-bottom: -650px;
    width: 100%;
    height: 400px;
    background-repeat: no-repeat;
    background-size: cover;

    @media (min-width: 768px) {
      margin-bottom: -100px;
    }
  }
`

const Timing = styled.div`
  display: flex;
  justify-content: space-between;
  height: 800px;
`

export default Section
