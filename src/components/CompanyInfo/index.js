import React from 'react';
import styles from './companyInfo.module.scss';

const logos = {
  imports: require('./../../images/ramirez-logo-imports.png'),
  exports: require('./../../images/ramirez-logo-exports.png'),
  distribution: require('./../../images/ramirez-logo-distribution.png'),
}

const CompanyInfo = ({ company = 'imports', title = '', children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={logos[company]}/>
      </div>
      <h2 className={styles.title}>{title}</h2>
      <div className="text-base">
        {children}
      </div>
    </div>
  )
}

export default CompanyInfo;