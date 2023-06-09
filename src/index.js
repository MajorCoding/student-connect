import React from "react"
import { createRoot } from "react-dom/client"
import "./globalStyle.css"
import "normalize.css"
import "aos/dist/aos.css"
import App from "./app"
const container = document.getElementById("root")

const root = createRoot(container)
root.render(<App />)

if (module.hot) {
  module.hot.accept()
}
