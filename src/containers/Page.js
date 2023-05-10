import React, { useEffect, useState } from "react"
import TopBar from "../components/TopBar"
import Header from "../components/Header"
import Footer from "../components/Footer"
import styled from "styled-components/macro"
import Breadcrumb from "../components/Breadcrumb"
import SidebarDrawer from "../components/SideDrawer"

const Page = ({ children, title, noBread, ...rest }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  useEffect(() => {
    document.title = `${title} | Student Connect`
    window.scrollTo(0, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title])

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true)
  }
  const handleDrawerClose = () => {
    setIsDrawerOpen(false)
  }

  return (
    <Container {...rest}>
      <Header setIsDrawerOpen={handleDrawerOpen} />
      <SidebarDrawer isOpen={isDrawerOpen} onClose={handleDrawerClose} />
      {noBread ? <TopBar /> : <Breadcrumb title={title} />}
      <Main>{children}</Main>
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Main = styled.div`
  flex: 1;
  flex-grow: 1;
`

export default Page
