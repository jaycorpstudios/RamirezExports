import React from "react"
import PropTypes from "prop-types"
import { Link } from 'gatsby'
import classnames from 'classnames';

import Navigation from '../Navigation';
import styles from './header.module.scss';
const logo = require('./../../images/ramirez-logo.svg');
const Header = ({ pageTitle }) => (
  <header className={styles.header}>
    <div className={styles.wrapper}>
      <Link to='/'><img src={logo} className={styles.logo} alt='Ramirez Group Logo'/></Link>
      <Navigation className="hidden-md"/>
    </div>
    <div className={classnames(styles.banner, 'page-title')}>
      <div className={classnames(styles.bannerTitle, 'ui-content')}>{pageTitle}</div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
