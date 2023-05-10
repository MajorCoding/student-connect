import React from "react"
import styled from "styled-components"
import color from "../constant/color"

const Address = () => {
  return (
    <Container>
      <Box>
        <p>Phone</p>
        <span>+91-9764796379</span>
      </Box>
      <Box>
        <p>Telephone</p>
        <span>02452-242070</span>
      </Box>
      <Box>
        <p>Email</p>
        <span>info@studenconnect.in</span>
      </Box>
      <Box>
        <p>Address</p>
        <span>Sector seven, Pradhikarn, Nigdi - 411044</span>
      </Box>
    </Container>
  )
}

const Container = styled.div`
  flex: 2;
  display: flex;
  flex-wrap: wrap;
`

const Box = styled.div`
  flex: 1;
  height: 200px;
  height: 100px;
  padding: 24px;
  background: ${color.gray100};
  border-radius: 10px;

  p {
    color: ${color.primary};
    margin-bottom: 6px;
    font-weight: 500;
  }
`

export default Address
