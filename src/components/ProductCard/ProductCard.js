import React from 'react';
import styles from './ProductCard.module.css';
import Card from '../Card/Card';
import Button from '../Button/Button';

// data = { imgUrl, name, price, description }
const ProductCard = ({ className, data }) => (
  <div className={`${styles.ProductCard} ${className}`}>
    <Card title={data.name} subtitle={data.price} data-testid="ProductCard">
      <div className={styles.Interior}>
        <img className={styles.productImage} alt={data.name} src={data.imgUrl} />
        <div className={styles.Information}>
          <div className={styles.descriptionContainer}>
            <p className={styles.description}>{data.description}</p>
          </div>
          <Button onClick={() => alert('added')}>Add to Cart</Button>
        </div>
      </div>
    </Card>
  </div>
);

ProductCard.propTypes = {
};

ProductCard.defaultProps = {};

export default ProductCard;
