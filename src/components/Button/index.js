import React from 'react';
import classnames from 'classnames';
import styles from './button.module.scss';

const Button = ({ primary = true, text = '', className = '' }) => {
  const buttonStyle = primary ? styles.primary : styles.secondary;
  const classes = classnames(styles.button, buttonStyle, className)
  return (
    <button className={classes}>{text}</button>
  )
}

export default Button;