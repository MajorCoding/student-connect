import React from "react"
import Wrapper from "../containers/Wrapper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"
// import required modules
import { Autoplay, EffectFade, Pagination } from "swiper"
import styled from "styled-components/macro"
import color from "../constant/color"

const Hero = () => {
  return (
    <Slider>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          reverseDirection: true,
          waitForTransition: true,
          pauseOnMouseEnter: true,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Autoplay, Pagination]}
        className="hero-swiper"
      >
        <SwiperSlide>
          <Container>
            <Wrapper>
              <WrapperContainer>
                <Content>
                  <LargeTitle>11th Class Batches</LargeTitle>
                  <Title>
                    Starting from <span>May, 01 2022</span>
                  </Title>

                  <Text>
                    {/* Registration are starting of 11th batch grab you seats. And learn from your top
                    professor’s. who gave you there 100% to grow your knowledge. that you need. so
                    grab your seats. */}
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, nesciunt
                    totam possimus facilis quos necessitatibus dignissimos. Aperiam ratione
                    repudiandae voluptatem possimus minima aliquid, eius pariatur alias nisi
                    fugiat, nobis reiciendis.
                  </Text>
                  <Button>
                    Join Now <i className="ph-arrow-right-light"></i>
                  </Button>
                </Content>
              </WrapperContainer>
            </Wrapper>
            <Background img="https://s7ap1.scene7.com/is/image/rmit/student-homepage-bowen-st-1920px?wid=1440&hei=450&scl=1" />
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container>
            <Wrapper>
              <WrapperContainer>
                <Content>
                  <SecondTitle>
                    Parbhani's <span>No. 1</span>
                  </SecondTitle>
                  <LargeTitle>BIOLOGY CLASSES</LargeTitle>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ab, aliquam
                    dicta temporibus eveniet enim. Sequi non beatae esse vitae voluptate qui
                    nesciunt voluptatibus? Accusantium laudantium dolorem facere neque soluta.
                    {/* Physics is the most fundamental of sciences learning it could be both a fun and
                    a challenge. Fun since you get to know the workings of the world around you.
                    Challenge because many a concept in Physics are challenging and can strain your
                    cognitive tissues. */}
                  </Text>
                </Content>
              </WrapperContainer>
            </Wrapper>
            <Background img="/assets/class-room.jpg" />
          </Container>
        </SwiperSlide>
      </Swiper>
    </Slider>
  )
}

const Slider = styled.div`
  /* padding: 60px; */
  position: relative;
`

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 520px;
  background-size: cover;
  overflow: hidden;

  .bg-stock {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
  }

  @media (min-width: 768px) {
    height: 600px;
  }
`
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(1, 9, 30, 0.9), rgba(1, 9, 30, 0.9)),
    url(${({ img }) => img && img});
  background-size: cover;
  background: linear-gradient(90.14deg, #052171 1.03%, #14379b 99.89%);
  background: linear-gradient(90.14deg, #052171 1.03%, #14389bc5 99.89%),
    url(${({ img }) => img && img});
  background-size: cover;
  img {
    width: 100%;
    height: 100%;
  }
`

const WrapperContainer = styled.div`
  position: relative;
  padding: 48px 0;
  height: 520px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  @media (min-width: 768px) {
    height: 450px;
  }
`

const Content = styled.div`
  flex: 1;
`

const Title = styled.h4`
  font-size: 16px;
  font-weight: 400;
  color: ${color.gray100};
  margin-bottom: 6px;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  span {
    font-weight: 500;
    color: #ffc10d;
  }
`

const LargeTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 900;
  color: ${color.gray100};
  text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06),
    0px 0px 1px rgba(0, 0, 0, 0.04);

  @media (min-width: 768px) {
    font-size: 36px;
  }
`

const SecondTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
  color: ${color.gray100};
  text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06),
    0px 0px 1px rgba(0, 0, 0, 0.04);

  @media (min-width: 768px) {
    font-size: 28px;
  }

  span {
    font-weight: 500;
    color: #2563eb;
  }
`

const Text = styled.p`
  margin-top: 14px;
  width: 100%;
  line-height: 22px;
  font-size: 14px;
  font-weight: 300;
  color: #e2e8f0;

  @media (min-width: 768px) {
    width: 60%;
    font-size: 16px;
  }
`

const Button = styled.button`
  margin-top: 24px;
  width: 110px;
  height: 36px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: #fff;
  font-size: 14px;
  background: #1e40af;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover {
    background: #0ea5e9;
  }

  @media (min-width: 768px) {
    width: 140px;
    height: 40px;
    font-size: 16px;
  }
`

export default Hero
