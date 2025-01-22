import React from 'react';
import styles from './Avatar.module.css';

const Avatar = ({className, src, alt = "image"}) => (
  <div alt={alt} className={`${styles.Avatar} ${className}`} data-testid="Avatar" style={{
    backgroundImage: `url(${src})`
  }}/>
);

Avatar.propTypes = {};

Avatar.defaultProps = {};

export default Avatar;
