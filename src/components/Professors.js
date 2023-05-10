import React, { useEffect } from "react"
import Professor from "./Professor"
import styled from "styled-components/macro"
import Aos from "aos"
import color from "../constant/color"

const Professors = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <Container>
      <Professor
        data-aos="fade-right"
        photo="https://randomuser.me/api/portraits/men/76.jpg"
        name="Ashok Rana"
        education="M.Sc in (Biology), B.Ed."
      />
      <div className="line"></div>
      <Professor
        data-aos="fade-left"
        photo="https://randomuser.me/api/portraits/women/91.jpg"
        name="Prerna Deshmukh"
        education="M.Sc in (Physics), B.Ed."
      />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;

  .line {
    height: 2px;
    background: ${color.gray200};
  }

  @media (min-width: 768px) {
    flex-direction: row;

    .line {
      width: 2px;
      height: auto;
      background: ${color.gray200};
    }
  }
`

export default Professors
