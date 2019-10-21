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
        <div className={classnames(styles.Wrapper, 'ui-content')}>
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
              <a target="_blank" href='https://www.facebook.com/2-Ramirez-Imports-ltd-1951830621794433/'><img src={facebookIcon} alt="Follow us at Facebook"/></a>
              <a target="_blank" href='https://www.instagram.com/2ramirezimports/'><img src={instagramIcon} alt="Follow us at Instagram"/></a>
              <a target="_blank" href='http://www.linkedin.com/company/2ramirezimports'><img src={linkedinIcon} alt="Follow us at Linkedin"/></a>
              <a target="_blank" href='https://twitter.com/2_imports'><img src={twitterIcon} alt="Follow us at Twitter"/></a>
            </div>
          </div>
        </div>
      </section>
      <footer className={styles.Footer}>
        <img className={classnames(styles.SpaceBottom, styles.logo)} src={logo} alt='Ramirez Group Logo'/>
        <Navigation className={classnames(styles.SpaceBottom, 'hidden-xs')} invert={true}/>
        <div className={copyrightStyles}>211 - 669 Ridley Place. Delta, B.C. V3M 6Y9 ©{year} Ramirez Imports, all rights reserved.</div>
      </footer>
    </React.Fragment>
  )
}


export default Footer;
