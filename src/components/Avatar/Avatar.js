import React from 'react';
import styles from './Avatar.module.css';

const Avatar = ({src, alt = "image"}) => (
  <img src={src} alt={alt}className={styles.Avatar} data-testid="Avatar" />
);

Avatar.propTypes = {};

Avatar.defaultProps = {};

export default Avatar;
