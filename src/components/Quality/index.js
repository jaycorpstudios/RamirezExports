import React from 'react';
import classnames from 'classnames';
import TitleHighlight from './../TitleHighlight';
import styles from './quality.module.scss';

const Quality = () => {
  const usdaLogo = require('./../../images/usda-logo.png');
  const globalGapLogo = require('./../../images/global-gap-logo.png');
  const drcLogo = require('./../../images/drc-logo.png');
  const primusLogo = require('./../../images/primus-logo.png');
  const containerClasses = classnames('ui-main', styles.container);
  return (
    <section className={containerClasses}>
      <div className={styles.info}>
        <TitleHighlight text="It's all about quality"/>
        <p className='text-base'>Ramirez Group produce growers comply with food safety and security standards and handling protocols to offer safe, high quality product. We are committed to consistently delivering high quality fresh produce.</p>
      </div>
      <div className={styles.logos}>
        <img className={styles.logo} src={usdaLogo} alt="USDA Logo"/>
        <img className={styles.logo} src={globalGapLogo} alt="Global G.A.P. Logo"/>
        <img className={styles.logo} src={drcLogo} alt="RDC Logo"/>
        <img className={styles.logo} src={primusLogo} alt="Primus GFS Logo"/>
      </div>
    </section>
  )
}

export default Quality;