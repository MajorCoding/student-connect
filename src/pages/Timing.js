import React, { useEffect } from "react"
import Page from "../containers/Page"
import Grid from "../containers/Grid"
import Section from "../containers/Section"
import TimingContent from "../components/TimingContent"
import Aos from "aos"
import "aos/dist/aos.css"
const Timing = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <Page title="Timing">
      <Section>
        <div style={{ minHeight: "850px" }}>
          <Grid>
            <Grid.Row gap="40">
              <TimingContent />
              <div className="right" data-aos="fade-left">
                <img
                  style={{ width: "350px" }}
                  src="./assets/professor-teaching.svg"
                  alt="professor-teaching"
                />
              </div>
            </Grid.Row>
          </Grid>
        </div>
      </Section>
    </Page>
  )
}

export default Timing
