import React from "react"
import styled from "styled-components/macro"
import Wrapper from "../containers/Wrapper"
import color from "../constant/color"

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <div className="logo">
            <img src="./assets/footer-logo.svg" alt="logo" />
          </div>
          <FooterContent>
            <div className="box">
              <h4>Syllabus</h4>
              <div className="links">
                <span>11th</span>
                <span>12th</span>
                <span>Books</span>
              </div>
            </div>
            <div className="box">
              <h4>Batches Timing</h4>
              <div className="links">
                <span>11th</span>
                <span>12th</span>
                <span>CET</span>
                <span>NEET</span>
              </div>
            </div>
            <div className="box">
              <h4>Contact</h4>
              <div className="links">
                <span>
                  <i className="ph ph-phone"></i> +91-9970977224
                </span>
                <span>
                  <i className="ph ph-envelope-simple"></i> info@prashantpatil.com
                </span>
                <span>
                  <i className="ph ph-map-pin-line"></i> Sector seven, Pradhikarn, Nigdi - 411044
                </span>
              </div>
            </div>
          </FooterContent>
        </Header>

        <Bottom>
          <p>© 2021 Student Connect Pvt. All rights reserved.</p>
          <p>
            Made with <i className="ph-fill ph-heart"></i> Vinay
          </p>
        </Bottom>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  padding: 60px 0 40px 0;
  border-top: 4px solid ${color.secondary};
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.63) 0%, #0f172a 34.38%, #0f172a 100%),
    repeat scroll 0% 0%, rgba(0, 0, 0, 0) url("./assets/webb-dark.png") repeat scroll 0% 0%;
  background-repeat: repeat;
  object-fit: fill;
  @media (min-width: 1024px) {
    background-repeat: repeat;
  }
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0 60px 0;
  gap: 40px;
  .logo {
    flex: 1;
  }

  @media (min-width: 768px) {
    padding: 10px 0 100px 0;
    flex-direction: row;
    gap: 0px;
  }
`

const FooterContent = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0px;
  }

  .box {
    color: ${color.gray300};
    h4 {
      font-weight: 500;
      margin-bottom: 12px;
    }
    .links {
      display: flex;
      flex-direction: column;
      gap: 8px;

      span {
        font-size: 15px;
        font-weight: 400;
        color: ${color.gray500};
        transition: all 0.3s ease-in-out;
        cursor: pointer;

        :hover {
          color: ${color.gray400};
        }
      }
    }
  }
`

const Bottom = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 1px solid ${color.gray700};
  gap: 12px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0px;
  }

  p {
    font-size: 14px;
    color: ${color.gray400};
    font-weight: 500;

    i {
      color: ${color.secondary};
    }
  }
`

export default Footer
