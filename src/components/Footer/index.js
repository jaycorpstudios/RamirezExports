import React from 'react';
import classnames from 'classnames';
import { Link } from 'gatsby';
import Navigation from '../Navigation';
import styles from './footer.module.scss';
const logo = require('./../../images/ramirez-logo-negative.svg');
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const copyrightStyles = classnames(styles.Copyright, styles.SpaceBottom);
  const emailIcon = require('./../../images/email-icon.svg');
  const phoneIcon = require('./../../images/phone-icon.svg');
  const facebookIcon = require('./../../images/facebook-icon.svg');
  const instagramIcon = require('./../../images/instagram-icon.svg');
  const linkedinIcon = require('./../../images/linkedin-icon.svg');
  const twitterIcon = require('./../../images/twitter-icon.svg');
  return (
    <React.Fragment>
      <section className={classnames(styles.ContactBar, 'text-base')}>
        <div className={styles.ContactItem}>
          <img src={emailIcon} alt="Email us"/>
          <span>
            <div>EMAIL US</div>
            <a href='mailto:information@ramirezgroup.ca'>information@ramirezgroup.ca</a>
          </span>
        </div>
        <div className={styles.ContactItem}>
          <img src={phoneIcon} alt="Call us now"/>
          <span>
            <div>CALL US NOW</div>
            <a href='tel:+1(604)515-9339'>+1 (604) 515 9339</a>
          </span>
        </div>
        <div className={styles.SocialMedia}>
          <div>CALL US NOW</div>
          <div className={styles.SocialIcons}>
            <Link to=''><img src={facebookIcon} alt="Follow us at Facebook"/></Link>
            <Link to=''><img src={instagramIcon} alt="Follow us at Instagram"/></Link>
            <Link to=''><img src={linkedinIcon} alt="Follow us at Linkedin"/></Link>
            <Link to=''><img src={twitterIcon} alt="Follow us at Twitter"/></Link>
          </div>
        </div>
      </section>
      <footer className={styles.Footer}>
        <img className={styles.SpaceBottom} src={logo} alt='Ramirez Group Logo'/>
        <Navigation className={classnames(styles.SpaceBottom, 'hidden-xs')} invert={true}/>
        <div className={copyrightStyles}>211 - 669 Ridley Place. Delta, B.C. V3M 6Y9 ©{year} Ramirez Imports, all rights reserved.</div>
      </footer>
    </React.Fragment>
  )
}


export default Footer;
