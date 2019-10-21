import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import HomeHeader from './../components/HomeHeader';
import TitleHighlight from './../components/TitleHighlight';
import Button from './../components/Button';
import './../theme/globals.scss';
import styles from './../theme/pages/homePage.module.scss';

const IndexPage = () => {
  const logoExports = require('./../images/ramirez-logo-exports.png');
  const logoImports = require('./../images/ramirez-logo-imports.png');
  const logoDistribution = require('./../images/ramirez-logo-distribution.png');
  return (
    <React.Fragment>
      <HomeHeader />
      <Layout hideHeader={true}>
        <SEO title="Home" />
        <section id="get-to-know-us">
          <div className={styles.companies}>
            <div className={styles.info}>
              <TitleHighlight text="Get to know us"/>
              <p><strong>Ramirez Group</strong> is an international organization based in the beautiful province of British Columbia, Canada. Formed by a <strong>Mexican export</strong> company, a <strong>Canadian import</strong> company and a <strong>Canadian distribution</strong> company, we have it all covered!</p>
              <Link to='/companies'>
                <Button text="MORE ABOUT OUR COMPANIES" className={styles.cta}/>
              </Link>
            </div>
            <div className={styles.logos}>
              <img src={logoExports} className={styles.companyLogo} alt="Ramirez Exports Logo"/>
              <img src={logoImports} className={styles.companyLogo} alt="Ramirez Imports Logo"/>
              <img src={logoDistribution} className={styles.companyLogo} alt="Ramirez Distribution Logo"/>
            </div>
          </div>
        </section>
      </Layout>
    </React.Fragment>
  )
}

export default IndexPage
