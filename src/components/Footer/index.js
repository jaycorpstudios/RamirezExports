import React from 'react';
import classnames from 'classnames';

import Navigation from '../Navigation';
import styles from './footer.module.scss';
const logo = require('./../../images/ramirez-logo-negative.svg');
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const copyrightStyles = classnames(styles.copyright, styles.spaceBottom);
  return (
    <footer className={styles.footer}>
      <img className={styles.spaceBottom} src={logo} alt='Ramirez Group Logo'/>
      <Navigation className={styles.spaceBottom} invert={true}/>
      <div className={copyrightStyles}>123 Some Ave. Vancouver, BC V3K 2J8  ©  {year} Ramirez Imports, all rights reserved.</div>
    </footer>
  )
}


export default Footer;
