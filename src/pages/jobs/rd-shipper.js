import React from "react"
import classnames from 'classnames';
import Layout from "./../../components/Layout"
import SEO from "./../../components/seo"
import './../../theme/globals.scss';
import TitleHighlight from './../../components/TitleHighlight';
import styles from './../../theme/pages/jobsPage.module.scss';
const pageTitle = 'Jobs';
const infoStyles = classnames('ui-md-col-12 text-justify', styles.JobInfo);

const IndexPage = () => (
  <Layout pageTitle={pageTitle}>
    <SEO title={pageTitle} />
    <div className={infoStyles}>
      <TitleHighlight className={styles.JobEntryTitle} text='Shipper and Receiver'/>
      <p><strong>Ramirez Distribution ltd</strong> operates conventional importing and distribution facilities in Delta BC, delivering Fresh Produce to Wholesalers and Retailers throughout the lower mainland. Our customers are the foundation of our business. We import, distribute and service both independent and chain store customers.</p>
      <p><strong>Ramirez Distribution ltd</strong> is looking for a Shipper/Receiver to join our Delta team! The Shipper/Receiver is responsible for checking and recording inbound and outbound freight for the facility, repacking items to ensure order fulfillment, physically loading and unloading trucks and containers. He/she is responsible for ensuring accuracy of shipments meaning the correct item and quantity have been shipped/received and that the proper documentation has been completed. The shipping/receiving team member is positive, hardworking, detail oriented and strong team player.</p>
      <h3 className="h3">Your daily tasks may include</h3>
      <ul className={styles.List}>
        <li>Reporting safety issues, damaged and/or broken equipment to the General Manager</li>
        <li>Picking and staging orders</li>
        <li>Performing Quality Control Reports</li>
        <li>Receiving orders & Ensuring completion of necessary documentation</li>
        <li>Loading outbound loads & Ensuring completion of necessary documentation</li>
        <li>Slotting received product in coolers as instructed</li>
        <li>Grading or stickering product</li>
        <li>Unloading/palletizing product from shipping containers</li>
        <li>Removing and sorting garbage/recycling etc. from the warehouse</li>
        <li>Cleaning (including deep cleaning) in/around the warehouse, dock or work area</li>
      </ul>
      <h3 className="h3">Your experience may include</h3>
      <ul className={styles.List}>
        <li>Experience in Fresh Produce and/or Wholesale Distribution</li>
        <li>Forklift and Pallet Jack Experience, certification would be an asset</li>
        <li>Strong mathematical and communication skills</li>
        <li>Ability to lift up to 50 lbs repetitively on a daily basis</li>
        <li>High attention to detail to ensure accuracy for product, orders and shipments</li>
        <li>Knowledge of Food Safety & Workplace Safety Procedures would be a solid asset</li>
        <li>ERP/Oracle knowledge (would be an asset)</li>
        <li>English (preferred), Spanish (asset), Mandarin (asset)</li>
      </ul>
      <h3 className="h3">Working conditions</h3>
      <ul className={styles.List}>
        <li>Contract, full time position (40 hours per week)</li>
        <li>Able to work on weekends</li>
      </ul>
      <h3 className="h3">Qualifications</h3>
      <ul className={styles.List}>
        <li>Completed High school or equivalent</li>
        <li>Minimum 1 year’s driving experience</li>
        <li>Minimum Class 5 Driver License (BC)</li>
        <li>Able to lift up to 55 lbs</li>
        <li>Motivated & self-starter</li>
        <li>Able to work independently</li>
        <li>Excellent customer service skills</li>
      </ul>
      <h3 className="h3">What we offer</h3>
      <ul className={styles.List}>
        <li>Salary base</li>
        <li>Vacation and holidays</li>
        <li>Training and development</li>
        <li>Opportunities for growth</li>
        <li>Annual incentive plan</li>
        <li>Full line of benefits including medical, dental, vision, life and disability insurance upon completion of probation</li>
        <li>Great team atmosphere</li>
      </ul>
    </div>
  </Layout>
)

export default IndexPage
