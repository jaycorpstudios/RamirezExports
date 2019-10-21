/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames';

import Header from './../Header'
import Quality from './../Quality'
import Footer from './../Footer'

const Layout = ({ children, pageTitle, hideHeader = false }) => {
  const classes = classnames('text-base ui-content ui-main');

  return (
    <React.Fragment>
      {!hideHeader && <Header pageTitle={pageTitle}/>}
      <main className={classes}>{children}</main>
      <Quality/>
      <Footer/>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
