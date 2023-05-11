import React from "react"
import styled from "styled-components"
import color from "../constant/color"
import { Link } from "react-router-dom"

const NotFound = () => {
  document.body.style.background = "#fff"
  return (
    <Container>
      <Header>
        <Link to="/">
          <img src="./assets/logo.svg" alt="logo" />
        </Link>
      </Header>
      <Main>
        <div className="body">
          <img src="./assets/images/404error.gif" alt="404 error" />
          <h3>Ooops!! Page Not Found</h3>
          <p>This page does't exist Or is unavalable.</p>
          <Link to="/">Back To Home</Link>
        </div>
      </Main>
      <Footer>
        <p>© 2021 Student Connect. All rights reserved.</p>
        <p>
          Made with <i className="ph-fill ph-heart"></i> By Vinay
        </p>
      </Footer>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 94vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 0 auto;
  padding: 24px 30px;

  @media (min-width: 640px) {
    padding: 24px 30px;
  }

  @media (min-width: 768px) {
    padding: 24px 30px;
    height: 98vh;
  }
  @media (min-width: 1024px) {
    padding: 24px 30px;
    position: static;
  }

  @media (min-width: 1280px) {
    width: 1296px;
    margin: 0 auto;
  }
`

const Header = styled.div`
  padding: 6px 0;
  min-height: 60px;
`
const Main = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  .body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 400px;
    }

    h3 {
      font-size: 24px;
      font-weight: 800;
      color: ${color.gray800};
      margin-bottom: 8px;
    }
    p {
      color: ${color.gray600};
      margin-bottom: 16px;
    }

    a {
      padding: 12px 20px;
      color: #fff;
      background: ${color.gray900};
      border-radius: 4px;
    }
  }
`

const Footer = styled.div`
  width: 100%;
  min-height: 66.99px;
  left: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding-top: 14px;
  border-top: 1px solid ${color.gray200};

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
  p {
    font-size: 12px;
    font-weight: 500;
    color: ${color.gray600};

    @media (min-width: 640px) {
      font-size: 14px;
    }

    i {
      color: ${color.primary};
    }
  }
`

export default NotFound
