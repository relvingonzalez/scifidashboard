import React, { useState, useMemo } from 'react';
import styles from './Products.module.css';
import ProductList from '../ProductList/ProductList';
import { alienProducts } from '../../data/aliensData';
import SearchInput from '../SearchInput/SearchInput';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const items = useMemo(() => {
    return alienProducts.filter((d) => !searchTerm || d.name.toLowerCase().includes(searchTerm.toLowerCase()) || d.description.toLowerCase().includes(searchTerm.toLowerCase()))
  }, [searchTerm])
  return (
    <div className={styles.Products} data-testid="Products">
      <div className={styles.toolBar}>
        <h1>Marketplace</h1>
        <SearchInput searchTerm={searchTerm} onSearch={setSearchTerm} />
      </div>
      <ProductList data={items} searchTerm={searchTerm} />
    </div>
  );
}

Products.propTypes = {};

Products.defaultProps = {};

export default Products;