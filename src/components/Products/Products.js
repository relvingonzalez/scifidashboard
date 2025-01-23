import React, { useState, useMemo } from 'react';
import styles from './Products.module.css';
import ProductList from '../ProductList/ProductList';
import { alienProducts } from '../../data/aliensData';
import SearchInput from '../SearchInput/SearchInput';
import Modal from '../Modal/Modal';

const Products = () => {
  const [zoomedProduct, setZoomedProduct] = useState();
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const items = useMemo(() => {
    return alienProducts.filter((d) => !searchTerm || d.name.toLowerCase().includes(searchTerm.toLowerCase()) || d.description.toLowerCase().includes(searchTerm.toLowerCase()))
  }, [searchTerm]);
  const handleZoom = (productData) => {
    setZoomedProduct(productData);
    setShowModal(true);
  };
  return (
    <>
      <div className={styles.Products} data-testid="Products">
        <div className={styles.toolBar}>
          <h1>Marketplace</h1>
          <SearchInput searchTerm={searchTerm} onSearch={setSearchTerm} />
        </div>
        <ProductList data={items} searchTerm={searchTerm} onZoomProduct={handleZoom} />
      </div>
      <Modal className={styles.zoomedModal} isOpen={showModal} onClose={() => setShowModal(false)}>
        <h2>{zoomedProduct?.name}</h2>
        <img className={styles.zoomedProduct} src={zoomedProduct?.imgUrl} alt={zoomedProduct?.name} />
      </Modal>
    </>
  );
}

Products.propTypes = {};

Products.defaultProps = {};

export default Products;