import React from "react"
import classnames from 'classnames';
import Layout from "../components/Layout"
import SEO from "../components/seo"
import './../theme/globals.scss';
import TitleHighlight from './../components/TitleHighlight'
import styles from './../theme/pages/aboutPage.module.scss';

const pageTitle = 'About us';
const infoStyles = classnames('ui-md-col-7', styles.info);

const IndexPage = () => (
  <Layout pageTitle={pageTitle}>
    <SEO title={pageTitle} />
    <div className={infoStyles}>
      <TitleHighlight text='History'/>
      <p>Ramirez Group was established in order to meet growing retail demand for year-round fresh produce.</p>
      <p>Miguel Esparza founder and owner of Ramirez Imports ltd. (Canada), Ramirez Distribution ltd. (Canada) and 2 Ramirez S. de R.L. de C.V. (Mexico), has 25 plus years hands on global experience in Exports and Imports working for international companies in Mexico, Canada, England and Spain.</p>
      <TitleHighlight text='Market'/>
      <p>Ramirez Group. markets its produce to retailers, wholesalers, and food service distributors throughout BC. We are consistently exploring new and developing markets to continue to expand our reach in the Canadian market.</p>
      <p>Ramirez imports ltd, imports all year-round fresh produce from Mexico.</p>
      <TitleHighlight text='Service'/>
      <p>Ramirez Imports ltd. is dedicated to earning customer trust and satisfaction through consistent, superior service. We are available twenty-four hours a day, seven days a week to provide the attention needed for success in the fast paced fresh produce industry.</p>
      <p>Ramirez Import ltd. is a member of the The Fruit and Vegetable Dispute Resolution Corporation (DRC)</p>
    </div>
  </Layout>
)

export default IndexPage
