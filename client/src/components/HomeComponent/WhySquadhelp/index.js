import React from 'react';
import CONSTANTS from '../../../constants';
// import styles from '../../../pages/Home/Home.module.sass';
import data from './whySquadhelp.json';
import styles from "./WhySquadhelp.module.sass";

const WhySquadhelp = () => {
  return (
    <div className={styles.container__description}>
      <h2 className={styles.blueUnderline}>Why Squadhelp?</h2>
      <div className={styles.cardContainer}>
        {data.map(({ id, img, alt, heading, content }) => (
          <div className={styles.card} key={id}>
            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}${img}`} alt={alt} />
            <h3>{heading}</h3>
            <p>{content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhySquadhelp;
