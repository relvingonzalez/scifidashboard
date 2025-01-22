import React from 'react';
import styles from './Card.module.css';

const Card = ({ children, title, subtitle }) => (
  <div className={styles.Card}>
    <div className={styles.CardInner} data-testid="Card" data-augmented-ui="tl-clip br-2-clip-xy tr-round border">
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      {children}
    </div>
  </div>

);

Card.propTypes = {};

Card.defaultProps = {};

export default Card;
