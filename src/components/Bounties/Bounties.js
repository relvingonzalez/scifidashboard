import React, { useState, useMemo } from 'react';
import styles from './Bounties.module.css';
import BountyList from '../BountyList/BountyList';
import { alienBounties } from '../../data/aliensData';
import SearchInput from '../SearchInput/SearchInput';

const Bounties = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const items = useMemo(() => {
    return alienBounties.filter((d) => !searchTerm || d.name.toLowerCase().includes(searchTerm.toLowerCase()) || d.description.toLowerCase().includes(searchTerm.toLowerCase()))
  }, [searchTerm])
  return (
    <div className={styles.Bounties} data-testid="Bounties">
      <div className={styles.toolBar}>
        <h1>Bounties</h1>
          <SearchInput searchTerm={searchTerm} onSearch={setSearchTerm} />
      </div>
      <BountyList data={items} searchTerm={searchTerm} />
    </div>
  );
}

Bounties.propTypes = {};

Bounties.defaultProps = {};

export default Bounties;
