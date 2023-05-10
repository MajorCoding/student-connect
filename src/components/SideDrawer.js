import React, { useState } from "react"
import styled from "styled-components/macro"
import color from "../constant/color"
import { NavLink, Link } from "react-router-dom"

const SidebarDrawer = ({ isOpen, onClose }) => {
  const [isActive, setIsActive] = useState(false)

  const handleContentClick = (e) => {
    e.stopPropagation()
  }
  const handleClose = () => {
    setIsActive(!isActive)
    onClose()
  }

  return (
    <DrawerBackdrop isActive={isOpen} onClick={handleClose}>
      <div className="sidebar" onClick={handleContentClick}>
        <Nav>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/syllabus">Syllabus</NavItem>
          <NavItem to="/batch-timing">Batch Timing</NavItem>
          <NavItem to="/contact-us">Contact Us</NavItem>
          <Button to="#join-form">Join</Button>
        </Nav>
      </div>
    </DrawerBackdrop>
  )
}

const DrawerBackdrop = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 33;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  visibility: ${({ isActive }) => (isActive ? "visible" : "hidden")};
  transition: all 0.3s ease-in-out;

  .sidebar {
    position: relative;
    right: 0;
    width: 220px;
    height: 100vh;
    background: #fff;
    padding: 24px;
    display: "flex";
    flex-direction: "column";
    transform: ${({ isActive }) => (isActive ? "translateX(0)" : "translateX(-300px)")};
    z-index: 11;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    @media (min-width: 1280px) {
      overflow: "hidden";
      display: none;
    }

    .header {
      height: 90px;
      display: flex;
      justify-content: "center";
      padding-left: 26px;
      border-bottom: 1px solid ${color.gray200};
      img {
        width: 120px;
      }
    }
    .nav-container {
      height: calc(100vh - 120px);
      padding: 14px 16px;
      overflow-y: auto;
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  a {
    width: 100%;
    font-size: 15px;
    font-weight: 500;
    color: ${color.gray600};
    border: 1px solid ${color.gray300};
    border-radius: 4px;
    padding: 12px 16px;
    transition: all 0.3s ease-in-out;
    :hover {
      color: ${color.primary};
    }
  }
  ${Button} {
    color: #fff;
  }
`

const NavItem = styled(NavLink)`
  &.active {
    background: #eff6ff;
    color: ${color.primary};
    font-weight: 600;
    border: 1px solid #bfdbfe;
  }
`

export default SidebarDrawer
