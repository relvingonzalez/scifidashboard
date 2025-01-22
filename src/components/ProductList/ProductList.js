import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductList.module.css';

const ProductList = () => (
  <div className={styles.ProductList} data-testid="ProductList">
    ProductList Component
  </div>
);

ProductList.propTypes = {};

ProductList.defaultProps = {};

export default ProductList;
