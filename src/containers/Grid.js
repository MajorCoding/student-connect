import React from "react"
import styled from "styled-components/macro"

export default function Grid({ children, gap, rowGap, ...rest }) {
  return (
    <Container {...rest} gap={gap} rowGap={rowGap}>
      {children}
    </Container>
  )
}

Grid.Row = function GridRow({ gap, children, ...rest }) {
  return (
    <Row {...rest} gap={gap}>
      {children}
    </Row>
  )
}

const Row = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => (gap ? gap : 18)}px;
  transition: all 0.3s ease-in-out;

  @media (min-width: 640px) {
    flex-direction: column;
    flex-wrap: wrap;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 18px;
  transition: all 0.3s ease-in-out;

  @media (min-width: 768px) {
    gap: ${({ gap }) => (gap ? gap : 24)}px;
  }

  & ${Row} {
    @media (min-width: 768px) {
      flex-direction: row;
      gap: ${({ rowGap }) => (rowGap ? rowGap : 24)}px;
    }
  }
`
