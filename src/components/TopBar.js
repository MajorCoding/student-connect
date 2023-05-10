import React from "react"
import styled from "styled-components/macro"
import color from "../constant/color"
import Wrapper from "../containers/Wrapper"
const TopBar = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Item className="first">
            <i className="ph ph-megaphone"></i>
            <span>11th batch starting from 04 May,2023</span>
          </Item>
          <div className="right">
            <Item>
              <i className="ph ph-envelope-simple"></i>
              <span>info@studentconnect.in</span>
            </Item>
            <Item>
              <i className="ph ph-phone"></i>
              <span>+91-9764796379</span>
            </Item>
          </div>
        </Content>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  padding: 8px 0;
  background: ${color.gray900};
`
const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .first {
    display: none;
  }

  @media (min-width: 768px) {
    justify-content: space-between;

    .first {
      display: inline-block;
      display: flex;
      align-items: center;
    }
  }

  .right {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  i {
    color: #2563eb;
    font-size: 20px;
  }
  span {
    display: inline-block;
    font-size: 13px;
    color: ${color.gray400};
    font-weight: 500;
  }
`

export default TopBar
