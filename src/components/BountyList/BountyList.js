import React from 'react';
import styles from './BountyList.module.css';
import BountyCard from '../BountyCard/BountyCard';

const BountyList = ({ data = [], searchTerm = '' }) => {
  return (
    <div className={styles.BountyList} data-testid="BountyList">
      {
        data.map((d,i) => (
          <BountyCard className={styles.bountyCard} key={i} data={d} />
        ))
      }
    </div>
  );
}

BountyList.propTypes = {};

BountyList.defaultProps = {};

export default BountyList;
