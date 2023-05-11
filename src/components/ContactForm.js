import React, { useEffect } from "react"
import styled from "styled-components/macro"
import Input from "./Input"
import color from "../constant/color"
import Info from "./Info"
import Aos from "aos"
import "aos/dist/aos.css"

const ContactForm = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <Container>
      <Content data-aos="fade-up">
        <h3>Get in touch</h3>
        <p>24/7 will be answer your quetions and problems.</p>
      </Content>
      <Body>
        <Form data-aos="fade-right">
          <Row>
            <Input type={"text"} label="First Name" placeholder="name" />
            <Input type={"text"} label="Last Name" placeholder="surname" />
          </Row>
          <Row>
            <Input type={"email"} icon="ph-envelope-simple" label="Email" placeholder="Email" />
          </Row>
          <Row>
            <Input type={"tel"} icon="ph-phone" label="Phone" placeholder="phone" />
          </Row>
          <Row>
            <Message />
          </Row>
          <Row>
            <Button>Send</Button>
          </Row>
        </Form>
        <Right>
          <img data-aos="fade-down" src="./assets/images/biologist.gif" alt="biologiest" />
          <Contact data-aos="fade-left">
            <Info icon="ph-phone" title="Phone" info="+91-9764796379" />
            <Info icon="ph-phone-disconnect" title="Telephone" info="02452-242077" />
            <Info
              data-aos="fade-up"
              icon="ph-map-trifold"
              title="Address"
              info="Sector seven, Pradhikarn, Nigdi"
            />
            <Info icon="ph-envelope-simple" title="Email" info="info@studentconnect.in" />
          </Contact>
        </Right>
      </Body>
    </Container>
  )
}

const Message = () => {
  return (
    <TextArea>
      <label className="label" htmlFor="Message">
        Message
      </label>
      <textarea cols="2" rows="10" />
    </TextArea>
  )
}

const Container = styled.div`
  width: 100%;
`
const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 60px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`
const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: ${color.gray600};
    text-transform: capitalize;
    margin-bottom: 8px;
  }
  textarea {
    width: 360px;
    height: 100px;
    background: #fff;
    border: 1px solid ${color.gray300};
    border-radius: 4px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    @media (min-width: 420px) {
      width: 420px;
    }
  }
`

const Form = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  z-index: 22;
`

const Contact = styled.div`
  margin-top: -70px;
  flex: 2;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

const Content = styled.div`
  padding-bottom: 36px;
  border-bottom: 1px solid ${color.gray200};
  h3 {
    font-size: 24px;
    font-weight: 800;
    color: ${color.primary};
    margin-bottom: 10px;
  }
  p {
    color: ${color.gray600};
  }
`

const Row = styled.div`
  display: flex;
  gap: 12px;
`

const Button = styled.button`
  margin-top: 6px;
  width: 100%;
  padding: 14px 20px;
  border-radius: 6px;
  color: #fff;
  background: #1e40af;
  border: none;
  cursor: pointer;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 400px;
    margin-top: -130px;
  }
`

export default ContactForm
