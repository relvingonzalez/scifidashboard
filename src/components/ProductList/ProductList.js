import React from 'react';
import styles from './ProductList.module.css';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = ({ onZoomProduct, data, searchTerm = '' }) => {
  return (
    <div className={styles.ProductList} data-testid="ProductList">
      {
        data.map((d,i) => (
          <ProductCard className={styles.ProductCard} key={i} data={d} onZoom={onZoomProduct} />
        ))
      }
    </div>
  );
}

ProductList.propTypes = {};

ProductList.defaultProps = {};

export default ProductList;
