import React from 'react';
import styles from './GreetingCard.module.css';
import Card from '../Card/Card';
import Avatar from '../Avatar/Avatar';

const GreetingCard = ({name}) => (
  <div className={styles.GreetingCard}>
    <Card title={'Status'} subtitle="These are today's reports" data-testid="GreetingCard">
      <div className={styles.Interior}>
        <Avatar src="logo192.png"/>
        <div className={styles.Information}>
          <div className={styles.InformationHeader}>
            <div className={styles.typewriter}>
              <p>Greetings, {name}.</p>
            </div>
            <div>
              <p className={styles.credits}>
                Credits Remaining: <span>1090 </span>
              </p>
            </div>
          </div>
          <div className={styles.vitals}>
          <label htmlFor="hr">Heart Rate</label>
          <progress className={styles.good} id="hr" value="60" max="100"> Heart Rate </progress>
              <label htmlFor="oxygen">Oxygen </label>
              <progress className={styles.optimal} id="oxygen" value="99" max="100"> Oxygen </progress>
  
              <label htmlFor="bp">Blood Pressure</label>
              <progress className={styles.poor} id="bp" value="70" max="100"> Blood Pressure </progress>
          </div>
        </div>
      </div>
    </Card>
  </div>
);

GreetingCard.propTypes = {};

GreetingCard.defaultProps = {};

export default GreetingCard;
