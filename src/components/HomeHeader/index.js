import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from 'gatsby'
import classnames from 'classnames';

import Button from './../Button';
import Navigation from '../Navigation';
import NavigationMobile from '../NavigationMobile';
import styles from './homeheader.module.scss';

const HomeHeader = () => {
  const logo = require('./../../images/ramirez-logo-vertical.svg');
  const navigationClasses = classnames('hidden-md', styles.navigation)
  const hamburgerClasses = classnames('mdc-icon-button material-icons visible-sm', styles.hamburgerIcon);
  const [ isMenuOpen, updateMenu ] = useState(false);
  const closeMenu = () => {
    updateMenu(false);
  }
  const openMenu = () => {
    updateMenu(true);
  }
  return(
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <button className={hamburgerClasses} onClick={() => { openMenu() }}>menu</button>
        <Navigation className={navigationClasses} invert={true}/>
        <NavigationMobile open={isMenuOpen} onClose={closeMenu} />
        <img src={logo} className={styles.logo} alt='Ramirez Group Logo'/>
        <div className={styles.info}>
          <h1 className={styles.title}>Relax, we've <br className="hidden-xs"/>got it right</h1>
          <Link to='#get-to-know-us'>
            <Button text='GET TO KNOW US' primary={false}/>
          </Link>
        </div>
      </div>
    </header>
  )
}

HomeHeader.propTypes = {
  siteTitle: PropTypes.string,
}

HomeHeader.defaultProps = {
  siteTitle: ``,
}

export default HomeHeader
