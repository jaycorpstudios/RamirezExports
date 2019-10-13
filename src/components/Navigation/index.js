import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import classnames from 'classnames';

import styles from './navigation.module.scss';

const navItems = [
  { title: 'About us', link: '/about' },
  { title: 'Companies', link: '/companies' },
  { title: 'Products', link: '/products' },
  { title: 'Contact', link: '/contact' },
  { title: 'Jobs', link: '/jobs' },
];

const renderItems = () => {
  return navItems.map( (navItem, index) => {
    const { title, link } = navItem;
    return <Link key={index} className={styles.navItem} to={link}>{title}</Link>  
  })
}

const Navigation = ({ invert, className }) => {
  const classes = classnames(styles.navigation, { [`${styles.invert}`] : invert }, className );
  return (
    <nav className={classes}>
      {renderItems(invert)}
    </nav>
  )
}

Navigation.propTypes = {
  invert: PropTypes.bool,
}

Navigation.defaultProps = {
  invert: false,
}

export default Navigation
