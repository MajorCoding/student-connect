import React from "react"
import styled from "styled-components/macro"
import color from "../constant/color"
const Review = ({ photo, text, name, role }) => {
  return (
    <Container>
      <Avatar>
        <img src={photo} alt="student" />
      </Avatar>
      <Content>
        <div className="wrap">
          <i className={`ph-fill ph-quotes`}></i>
          <Text>{text}</Text>
          <i className={`ph-fill ph-quotes`}></i>
        </div>
      </Content>
      <Name>{name}</Name>
      <Role>{role}</Role>
    </Container>
  )
}

const Container = styled.div`
  flex: 1;
  margin: 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    padding: 0 60px;
  }
`

const Avatar = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-bottom: 12px;
  overflow: hidden;

  img {
    width: 100%;
  }
`

const Content = styled.div`
  padding: 18px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .wrap {
    width: 80%;
    position: relative;

    @media (min-width: 768px) {
      width: 64%;
    }
  }

  i {
    position: absolute;
    font-size: 36px;
    color: ${color.gray500};

    :first-child {
      top: -42px;
      left: 0;
      transform: scaleX(-1);
    }

    :last-child {
      bottom: -24px;
      right: 0;

      @media (min-width: 768px) {
        bottom: 0px;
      }
    }
  }
`

const Text = styled.p`
  font-family: "Domine", serif;
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 170%;
  text-align: center;
  text-transform: capitalize;
  color: ${color.gray600};
  margin-bottom: 16px;
`

const Name = styled.h4`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
  color: ${color.gray600};
`

const Role = styled.p`
  font-size: 14px;
  color: ${color.gray600};
`

export default Review
