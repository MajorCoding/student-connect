import React, { useEffect } from "react"
import styled from "styled-components/macro"
import color from "../constant/color"
import Aos from "aos"
import "aos/dist/aos.css"

const TrialContent = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <Container data-aos="fade-right">
      <Wrap>
        <Title>
          Start Your Academic Journey with a <br /> <span>Free Trial Class!</span>
        </Title>
        <Subtitle>
          Want to experience our institute firsthand? Sign up for our 7-day free trial class and
          discover why we're the best choice for your academic success. During the trial period,
          you'll have the opportunity to attend our regular sessions, interact with our expert
          tutors, and get a feel for our teaching methodology
        </Subtitle>
        <Subtitle>
          At the end of the trial, if you're satisfied with our classes, you can enroll in our
          regular sessions and start your journey towards academic excellence. But if you're not
          completely satisfied, there's no obligation to continue.
        </Subtitle>
        <Subtitle>
          Don't miss out on this opportunity to experience our institute for yourself. Sign up for
          our 7-day free trial class today!
        </Subtitle>
        <Ul>
          <List>Completely free of charge - no strings attached.</List>
          <List>No obligation to continue after the trial period</List>
          <List>Enroll in our regular sessions if you're satisfied with our classes.</List>
          <List>
            Don't miss out on this opportunity to start your journey towards academic excellence
          </List>
          <List>
            Get a feel for our teaching methodology and discover why we're the best choice for your
            academic success
          </List>
        </Ul>
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Wrap = styled.div``

const Title = styled.h3`
  font-size: 28px;
  font-weight: 800;
  color: ${color.primary};
  margin-bottom: 16px;
  span {
    color: ${color.secondary};
  }
`
const Subtitle = styled.p`
  width: 100%;
  font-size: 14px;
  color: ${color.gray600};
  margin-bottom: 24px;

  @media (min-width: 768px) {
    width: 90%;
  }
`

const Ul = styled.ul`
  list-style-type: "✔    ";
  margin-left: 24px;
`

const List = styled.li`
  font-size: 14px;
  color: ${color.gray600};
  font-weight: 500;
  margin-bottom: 10px;
`

export default TrialContent
