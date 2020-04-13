// Dependencies
import React from "react"
import { Helmet } from "react-helmet"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, label }) => (
  <>
    <Helmet>
      <link rel="stylesheet" href="https://use.typekit.net/qnu4qpv.css" />
    </Helmet>
    <Header label={`${label} - Header`} />
    {children}
    <Footer label={`${label} - Footer`} />
  </>
)

export default Layout
