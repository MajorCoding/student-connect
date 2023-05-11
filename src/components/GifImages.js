import React, { useEffect } from "react"
import styled from "styled-components"
import Aos from "aos"
import "aos/dist/aos.css"
const GifImages = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <Container>
      {/* <Image src="./assets/images/biologist-2.gif" alt="biologiest-2" /> */}
      <Image data-aos="fade-left" src="./assets/images/biologist-3.gif" alt="biologiest-3" />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 60px;
`

const Image = styled.img`
  width: 400px;
`

export default GifImages
