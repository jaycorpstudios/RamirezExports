import React from 'react';
import classnames from 'classnames';
import styles from './titlehighlight.module.scss';

const TitleHighlight = ({ text, className }) => (
  <h2 className={classnames(styles.titleHighlight, 'h2', className)}><span>{text}</span></h2>
)

export default TitleHighlight;
