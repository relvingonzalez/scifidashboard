import React from 'react';
import styles from './BountyCard.module.css';
import Card from '../Card/Card';
import Avatar from '../Avatar/Avatar';

// data = { imgUrl, name, location, phone, bounty, description }
const BountyCard = ({ className, data }) => (
  <div className={`${styles.BountyCard} ${className}`}>
    <Card title={data.name} subtitle={data.phone} data-testid="BountyCard">
      <div className={styles.Interior}>
        <Avatar src={data.imgUrl} />
        <div className={styles.Information}>
          <div className={styles.InformationHeader}>
            {data.location}
          </div>
          <div className={styles.bounty}>
            <p>Bounty: <span>{ data.bounty }</span></p>
            <p className={styles.description}>{data.description}</p>
          </div> 
        </div>
      </div>
    </Card>
  </div>
);

BountyCard.propTypes = {
};

BountyCard.defaultProps = {};

export default BountyCard;
