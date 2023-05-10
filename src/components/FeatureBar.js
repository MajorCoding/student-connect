import React, { useEffect } from "react"
import styled from "styled-components/macro"
import color from "../constant/color"
import Wrapper from "../containers/Wrapper"
import AnimatedNumber from "animated-number-react"
import Aos from "aos"
import "aos/dist/aos.css"
const FeatureBar = ({ ...rest }) => {
  let formatValue = (value) => value.toFixed(0)

  useEffect(() => {
    Aos.init({ duration: 9000 })
  }, [])
  return (
    <Wrapper>
      <Container {...rest} data-aos="fade-up">
        <WrapperAs>
          <Item>
            <Icon>
              <img src="./assets/girl.svg" alt="icons" />
            </Icon>
            <TextContent>
              <Count>
                <AnimatedNumber value={4000} formatValue={formatValue} duration={3000} />+
              </Count>
              <Text>Students</Text>
            </TextContent>
          </Item>
          <Item>
            <Icon>
              <img src="./assets/location.svg" alt="icons" />
            </Icon>
            <TextContent>
              <Count>
                <AnimatedNumber value={2} formatValue={formatValue} duration={3000} />+
              </Count>
              <Text>Branchs</Text>
            </TextContent>
          </Item>
          <Item>
            <Icon>
              <img src="./assets/exam.svg" alt="icons" />
            </Icon>
            <TextContent>
              <Count>
                <AnimatedNumber value={3000} formatValue={formatValue} duration={3000} />+
              </Count>
              <Text>Exam taken</Text>
            </TextContent>
          </Item>
          <Item>
            <Icon>
              <img src="./assets/diploma.svg" alt="icons" />
            </Icon>
            <TextContent>
              <Count>100%</Count>
              <Text>Satisfaction</Text>
            </TextContent>
          </Item>
        </WrapperAs>
      </Container>
    </Wrapper>
  )
}

const Container = styled.div`
  position: relative;
  margin-top: -80px;
  width: 100%;
  padding: 15px 14px;
  background: #fff;
  background-image: url("/assets/status-pattern.png");
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  border-radius: 6px;
  z-index: 4;

  @media (min-width: 1024px) {
    margin-top: -50px;
    padding: 30px 0;
  }
`
const WrapperAs = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: 1024px) {
    padding: 0 60px;
  }
`

const Item = styled.div`
  margin: 14px 14px 16px 14px;
  flex-basis: 110px;
  display: flex;
  align-items: center;
  /* border: 1px solid red; */

  @media (min-width: 1024px) {
    flex-basis: 180px;
    margin: 0px;
  }
`

const Icon = styled.div`
  width: 36px;
  height: 36px;
  margin-right: 12px;

  & img {
    width: 100%;
  }

  @media (min-width: 1024px) {
    width: 42px;
    height: 42px;
  }
`

const TextContent = styled.div`
  /* border: 1px solid blue; */
`

const Count = styled.h4`
  font-size: 18px;
  color: ${color.gray700};
  margin-bottom: 4px;
  font-weight: 800;

  @media (min-width: 1024px) {
    font-size: 22px;
  }
`

const Text = styled.p`
  font-size: 12px;
  color: ${color.gray600};

  @media (min-width: 1024px) {
    font-size: 14px;
  }
`

export default FeatureBar
