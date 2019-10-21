import React from "react"
import classnames from 'classnames';
import Layout from "../components/Layout"
import SEO from "../components/seo"
import './../theme/globals.scss';
import TitleHighlight from './../components/TitleHighlight';
import CompanyInfo from './../components/CompanyInfo';
import styles from './../theme/pages/companiesPage.module.scss';

const pageTitle = 'Companies';

const IndexPage = () => (
  <Layout pageTitle={pageTitle}>
    <SEO title={pageTitle} />
    <div className={classnames('ui-col-12', styles.container)}>
      <TitleHighlight text='We have it all covered' className={styles.title}/>
      <div className={styles.companies}>
      <CompanyInfo title='Ramirez Exports (Mexico)' company='exports'>
        <p><strong>Ramirez Exports</strong> is based in Mexico, this business unit looks after all our local Mexican suppliers and makes sure that our produce growers are committed to consistently delivering high quality fresh produce and comply with food safety and security standards to offer safe, high quality produce.</p>
      </CompanyInfo>
      <CompanyInfo title='Ramirez Imports ltd (Canada)' company='imports'>
        <p><strong>Ramirez Imports ltd.</strong> is based in Delta British Columbia, this business unit looks after our imports directly from Mexico and makes sure our produce is transported with high quality standards and comply with food safety and security international regulations.</p>
      </CompanyInfo>
      <CompanyInfo title='Ramirez Distribution ltd (Canada)' company='distribution'>
        <p><strong>Ramirez Distribution ltd.</strong> is based in Delta British Columbia, this business unit makes sure our imported produce is transported and delivered to our final customers with high quality standards and comply with food safety regulations.</p>
      </CompanyInfo>
      </div>
    </div>
  </Layout>
)

export default IndexPage
