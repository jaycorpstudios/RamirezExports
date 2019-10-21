import React from "react";
import classnames from 'classnames';

import Layout from "../components/Layout"
import SEO from "../components/seo"
import './../theme/globals.scss';
import styles from './../theme/pages/productsPage.module.scss';
const pageTitle = 'Products';
const avocadoImg = require('./../images/avocado-product.png');
const IndexPage = () => (
  <Layout pageTitle={pageTitle}>
    <SEO title={pageTitle} />
    <div className={classnames(styles.container, 'text-base')}>
      <div>
        <p>In Ramirez Group we strongly believe that having available fresh fruits and vegetables directly from Mexico is an important factor in our daily life.</p>
        <h2 className="h3">Avocados</h2>
        <p>Avocados offer nearly 20 vitamins and minerals in every serving, including potassium and lutein .Avocados are low in sugar. And they contain fiber, which helps you feel full longer.</p>
        <p><strong>Growing State:</strong>  Nayarit, Mexico.</p>
        <p><strong>Availability:</strong> Request Information.</p>
      </div>
      <img src={avocadoImg} className={styles.productImg}/>
    </div>
  </Layout>
)

export default IndexPage
