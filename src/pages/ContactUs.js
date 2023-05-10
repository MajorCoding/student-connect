import React from "react"
import Page from "../containers/Page"
import Section from "../containers/Section"
import ContactForm from "../components/ContactForm"
const ContactUs = () => {
  return (
    <Page title="ContactUs">
      <Section>
        <ContactForm />
      </Section>
    </Page>
  )
}

export default ContactUs
