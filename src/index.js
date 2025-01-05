import React from "react"
import ReactDom from "react-dom/client"
import Weather from "./Weather"
import './index.css'

const root=ReactDom.createRoot(document.querySelector(".container"))


root.render(<Weather/>)