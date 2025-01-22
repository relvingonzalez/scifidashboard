import React from 'react';
import styles from './Bounties.module.css';
import BountyList from '../BountyList/BountyList';
import { alienBounties } from '../../data/aliensData';

const Bounties = () => (
  <div className={styles.Bounties} data-testid="Bounties">
    <BountyList data={alienBounties}/>
  </div>
);

Bounties.propTypes = {};

Bounties.defaultProps = {};

export default Bounties;
