import React from "react"
import styled from "styled-components/macro"
import Wrapper from "../containers/Wrapper"
import { Link, NavLink } from "react-router-dom"
import color from "../constant/color"

const Header = ({ setIsDrawerOpen }) => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Logo>
            <Link to="/">
              <img src="/assets/logo.svg" alt="logo" />
            </Link>
          </Logo>
          <div className="menu" onClick={setIsDrawerOpen}>
            <i className="ph ph-list"></i>
          </div>
          <Nav>
            <NavItem to="/syllabus">Syllabus</NavItem>
            <NavItem to="/batch-timing">Batch Timing</NavItem>
            <NavItem to="/contact-us">Contact Us</NavItem>
            <Button to="#join-form">Join</Button>
          </Nav>
        </Content>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 16px 0 12px 0;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  z-index: 10;
`
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .menu {
    font-size: 28px;
    color: ${color.gray400};

    @media (min-width: 768px) {
      display: none;
    }
  }
`

const Logo = styled.div`
  img {
    width: 250px;
  }

  @media (min-width: 768px) {
    img {
      width: 280px;
    }
  }
`

const Button = styled(Link)`
  padding: 8px 20px;
  color: ${color.gray50};
  background: ${color.primary};
  border: none;
  border-radius: 4px;
`
const Nav = styled.nav`
  /* display: flex; */
  align-items: center;
  gap: 16px;
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }

  a {
    font-size: 15px;
    font-weight: 600;
    color: ${color.gray600};
    transition: all 0.3s ease-in-out;
    :hover {
      color: ${color.primary};
    }
  }
  ${Button} {
    color: #fff;
    :hover {
      color: #fff;
    }
  }
`

const NavItem = styled(NavLink)`
  &.active {
    color: ${color.primary};
    font-weight: 600;
  }
`

export default Header
