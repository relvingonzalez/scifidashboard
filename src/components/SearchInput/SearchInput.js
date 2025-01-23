import React from 'react';
import styles from './SearchInput.module.css';
import { SearchIcon } from 'lucide-react';

const SearchInput = ({ searchTerm, onSearch }) => (
  <div className={styles.SearchInput} data-testid="SearchInput">
    <input placeholder="search..." className={styles.input} type="text" id="search" name="search" onChange={(e) => onSearch(e.target.value)} value={searchTerm}/>
    <SearchIcon className={styles.searchIcon} />
  </div>
);

SearchInput.propTypes = {};

SearchInput.defaultProps = {};

export default SearchInput;
