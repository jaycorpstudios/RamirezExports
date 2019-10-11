import React from "react"
import PropTypes from "prop-types"
import { Link } from 'gatsby'

import Navigation from '../Navigation';
import styles from './header.module.scss';
const logo = require('./../../images/ramirez-logo.svg');
const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.wrapper}>
      <Link to='/'><img src={logo}/></Link>
      <Navigation/>
    </div>
    <div className={styles.banner}></div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
