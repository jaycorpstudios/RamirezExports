import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames';

import styles from './navigationMobile.module.scss';
import { navigationItems } from './../../util/constants';

const renderItems = (onClose) => {
  return navigationItems.map( (navItem, index) => {
    const { title, link } = navItem;
    return <Link key={index} onClick={() => onClose() } className={styles.NavItem} to={link}>{title}</Link>  
  })
}

const Navigation = ({ className, open, onClose }) => {
  const classes = classnames(styles.Container, className );
  const logo = require('./../../images/ramirez-logo-vertical-negative.svg');
  const closeIcon = classnames('mdc-icon-button material-icons', styles.closeIcon);
  return (
    open && (
      <nav className={classes}>
        <button className={closeIcon} onClick={() => onClose()}>close</button>
        <Link to='/' className={styles.homeIcon}><img src={logo}/></Link>
        <div className={styles.NavItems}>{renderItems(onClose)}</div>
      </nav>
    )
  )
}

Navigation.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func
}

Navigation.defaultProps = {
  open: false,
  onClose: () => { }
}

export default Navigation
