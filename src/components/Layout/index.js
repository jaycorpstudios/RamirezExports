/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames';

import Header from './../Header'
import Quality from './../Quality'
import Footer from './../Footer'
import NavigationMobile from './../NavigationMobile';
import styles from './layout.module.scss';

const Layout = ({ children, pageTitle, hideHeader = false }) => {
  const classes = classnames('text-base ui-content ui-main');
  const [ isMenuOpen, updateMenu ] = useState(false);

  const closeMenu = () => {
    updateMenu(false);
  }
  
  const openMenu = () => {
    updateMenu(true);
  }

  return (
    <React.Fragment>
      {!hideHeader && <Header pageTitle={pageTitle} openMenu={openMenu} />}
      <NavigationMobile open={isMenuOpen} onClose={closeMenu} />
      <main className={classes}>{children}</main>
      <div>
        <Quality/>
        <Footer/>
      </div>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
