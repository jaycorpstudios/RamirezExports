import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import './../theme/globals.scss';
import TitleHighlight from './../components/TitleHighlight'
const pageTitle = 'Contact';

const IndexPage = () => (
  <Layout pageTitle={pageTitle}>
    <SEO title={pageTitle} />
    <div className="ui-col-12">
      <TitleHighlight text='Contact'/>
      <div>the content...</div>
    </div>
  </Layout>
)

export default IndexPage
