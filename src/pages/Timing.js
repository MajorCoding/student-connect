import React from "react"
import Page from "../containers/Page"
import Section from "../containers/Section"
import TimingContent from "../components/TimingContent"
import GifImages from "../components/GifImages"

const Timing = () => {
  return (
    <Page title="Timing">
      <Section>
        <Section.Timing>
          <TimingContent />
          <GifImages />
        </Section.Timing>
      </Section>
    </Page>
  )
}

export default Timing
