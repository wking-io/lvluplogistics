import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactThankYouPage = () => (
  <Layout label="Contact Thank You">
    <SEO title="Thank you for reaching out!" />
    <div className="max-w-4xl mx-auto w-4/5 md:w-3/5 mt-48 mb-40 font-serif text-center">
      <h2 className="font-serif font-bold text-3xl md:text-4xl xl:text-5xl leading-tight mb-4">
        Thank you for giving us the opportunity to earn your business.
      </h2>
      <p className="mb-6">
        One of our team members will be in touch with you shortly.
      </p>
      <div className="flex items-center justify-center flex-col md:flex-row">
        <Link
          to="/contact"
          className="btn btn--primary w-full md:w-auto mb-4 md:mb-0 md:mr-8"
        >
          Go to contact page
        </Link>
        <Link to="/" className="btn btn--outline w-full md:w-auto">
          Go to homepage
        </Link>
      </div>
    </div>
  </Layout>
)

export default ContactThankYouPage
