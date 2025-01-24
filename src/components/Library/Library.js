import React from 'react';
import PropTypes from 'prop-types';
import styles from './Library.module.css';
import Bookshelf from '../Bookshelf/Bookshelf';
import { booksData } from '../../data/booksData';

const Library = () => (
  <div className={styles.Library} data-testid="Library">
    <h1>Library</h1>
    <div className={styles.bookshelfContainer}>
      <Bookshelf imgUrl={'bookshelf.webp'}  areasData={booksData}/>
    </div>
  </div>
);

Library.propTypes = {};

Library.defaultProps = {};

export default Library;
