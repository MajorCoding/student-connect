import React from "react"
import styled from "styled-components/macro"
import color from "../constant/color"

const SuccessModal = ({ isActive, onClosed }) => {
  return (
    <DrawerBackdrop isActive={isActive}>
      <Box isActive={isActive}>
        <div className="content">
          <div className="header">
            <i className="ph ph-check-circle"></i>
          </div>
          <div className="body">
            <h3>Success</h3>
            <p>You are Successfully signup</p>
          </div>
          <div className="action">
            <button className="cancelButton" onClick={onClosed}>
              Okay
            </button>
          </div>
        </div>
      </Box>
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
  background: rgba(255, 255, 255, 0.95);
  z-index: 55;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  visibility: ${({ isActive }) => (isActive ? "visible" : "hidden")};
  transition: all 0.3s ease-in-out;
  border-radius: 8px;
`
const Box = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  padding: 24px;
  transform: scale(${({ isActive }) => (isActive ? 1 : 0)});
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    i {
      font-size: 60px;
      color: #16a34a;
    }
  }

  .body {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* border: 1px solid red; */
    padding: 20px 0;
    margin-bottom: 14px;

    h3 {
      font-size: 20px;
      color: ${color.gray800};
      margin-bottom: 12px;
    }

    p {
      font-size: 16px;
      color: ${color.gray600};
    }
  }

  .action {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-bottom: 20px;
    button {
      width: 160px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 16px 20px;
      font-size: 16px;
      border: none;
      border-radius: 4px;
      background: ${color.primary};
      color: #fff;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
    }
  }
`

export default SuccessModal
