import React from "react"
import classnames from 'classnames';
import Layout from "../components/Layout"
import { Link } from 'gatsby';
import SEO from "../components/seo"
import './../theme/globals.scss';
import TitleHighlight from './../components/TitleHighlight';
import Button from './../components/Button'
import styles from './../theme/pages/jobsPage.module.scss';
import  { jobsList } from './../staticData/jobs/index';
const pageTitle = 'Jobs';
const infoStyles = classnames('ui-md-col-7', styles.info);

const IndexPage = () => (
  <Layout pageTitle={pageTitle}>
    <SEO title={pageTitle} />
    <div className={infoStyles}>
      { jobsList.map( (job, index) => (
        <div key={`${job.id}-${index}`} className={classnames('text-justify', styles.JobEntry)}>
          <TitleHighlight className={styles.JobEntryTitle} text={job.title}/>
          <div className='text-base'>{job.shortDescription}</div>
          <Link to={`jobs/${job.id}`}>
            <Button className={styles.JobEntryCTA} text='SEE MORE' primary={false} />
          </Link>
        </div>
      )) }
    </div>
  </Layout>
)

export default IndexPage
