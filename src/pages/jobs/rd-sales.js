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
      <TitleHighlight className={styles.JobEntryTitle} text='Territory Sales Representative'/>
      <p><strong>Ramirez Distribution ltd</strong> operates conventional importing and distribution facilities in Delta BC, delivering Fresh Produce to Wholesalers and Retailers throughout the lower mainland. Our customers are the foundation of our business. We import, distribute and service both independent and chain store customers.</p>
      <p><strong>Ramirez Distribution ltd</strong> is looking for a Territory Sales Representative to join our Delta team!</p>
      <p>The Territory Sales Representative (TSR) is designated as the primary driver for bringing new customers to Ramirez Distribution ltd within their assigned region. Responsibilities are to grow and develop new business sales by securing new customer purchases in their region. Territory Sales Representative must be driven to achieve sales goals set by management. Must develop a business partnership with each customer through a process that supports mutually profitable growth while promoting the concept of Ramirez Distribution becoming the primary supplier in each account. Must be passionate to exceed goals by maintaining a positive attitude and being driven to be the best. This position requires a true competitor and someone with a proven track record laced with documented victories.</p>
      <h3 className="h3">Your daily tasks may include</h3>
      <ul className={styles.List}>
        <li>Set appointments with prospective customers</li>
        <li>Represent and sell Ramirez Distribution products professionally and effectively</li>
        <li>Must be able to prepare and deliver verbal sales presentations to both current and prospective customers</li>
        <li>Must be self-motivated with the ability to excel with minimal supervision</li>
        <li>Maintain an accurate call list of accounts with details for required action, order call day, contact information and opportunities</li>
        <li>Meet weekly with General Manager to discuss sales performance objectives</li>
        <li>Set targets for new customer account acquisition and implement strategy to secure the business</li>
      </ul>
      <h3 className="h3">Your experience may include</h3>
      <ul className={styles.List}>
        <li>2 to 3 + years of proven sales experience with proven results</li>
        <li>Proven sales experience in fresh produce. (avocado and other tropical fruits)</li>
        <li>Strong negotiation and presentation skills</li>
        <li>Ability to travel to see stores and attend trade shows</li>
        <li>High levels of integrity and commitment to providing exceptional customer service to clients</li>
        <li>Self-motivated with a positive and friendly attitude</li>
        <li>High degree of professionalism</li>
        <li>Ability to persuade and influence others effectively, in a tactful and professional manner.</li>
        <li>Work requires travel, primarily in assigned region.</li>
        <li>Must have a minimum of 4 years sales experience with a proven and successful track record.</li>
        <li>Ability to speak a second language is an asset (Spanish/Mandarin)</li>
      </ul>
      <h3 className="h3">Key performance measures</h3>
      <ul className={styles.List}>
        <li>Overall performance versus goals and objectives within the assigned territory</li>
        <li>Identify and convert top retailers within assigned region</li>
        <li>Identify and convert chain business within assigned region</li>
        <li>Develop strong relationships with key and chain customers</li>
        <li>Relationship building is a key contributor to the success of the TSM. Being able to develop and take relationships to the next level is critical</li>
        <li>Ability to build and maintain long term relationships with Key Customers secured within the region</li>
      </ul>
      <h3 className="h3">Working conditions</h3>
      <ul className={styles.List}>
        <li>Contract, full time position (40 hours per week)</li>
      </ul>
      <h3 className="h3">Qualifications</h3>
      <ul className={styles.List}>
        <li>Bachelor’s degree in Business, Communications, Marketing or Psychology is preferred</li>
        <li>Must have and maintain a valid driver’s license, reliable and presentable transportation and required insurance, minimum Class 5 Driver License (BC).</li>
        <li>Experience in Microsoft Office products and the use of mobile technology required</li>
        <li>Motivated & self-starter</li>
        <li>Able to work independently</li>
        <li>Excellent customer service skills</li>
      </ul>
      <h3 className="h3">What we offer</h3>
      <ul className={styles.List}>
        <li>Salary base plus commissions and travel/mileage/gas expenses paid</li>
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
