import React from 'react';
import styles from './Card.module.css';

const Card = ({ children, title, subtitle }) => (
  <div className={styles.Card} data-testid="Card" data-augmented-ui="tl-clip tr-round bl-clip br-clip-y both border">
    <h2>{title}</h2>
    <h3>{subtitle}</h3>
    { children }
  </div>
);

Card.propTypes = {};

Card.defaultProps = {};

export default Card;
