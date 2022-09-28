import React from 'react';
import cx from 'classnames';
import CONSTANTS from '../../../constants';
import data from "./managed.json";
import styles from "./Managed.module.scss";

const Managed = () => {
  const articleClasses = cx(styles.article, styles["col-12"], styles["col-sm-6"], styles["col-lg-3"]);
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}><a className={styles.heading_link} href="http://www.google.com">managed contests</a></h2>
      <h6 className={styles.subheading}>A Naming Agency Experience (minus the Agency-level price tag)</h6>
      <p className={styles.description}>
          Our hybrid-solution partners you with a trained Squadhelp branding
          consultant who will guide your crowdsourcing process step-by-step to get
          the best results possible.
        </p>
      <div className={styles.container}>
        <div className={styles.row}>
        {data.map((data, i) =>
          <article key={i + 'article'} className={articleClasses}>
            <img className={styles.article_img} src={`${CONSTANTS.STATIC_IMAGES_PATH}${data.img}`} alt={data.heading} />
            <h6 className={styles.article_heading}><span className={styles.article_heading_span}>{data.heading}</span></h6>
            <p className={styles.article_content}>{data.content}</p>
          </article>
        )}
        </div>
      </div>
      <a className={styles["learn-more-link"]} href="http://www.google.com">learn more about managed contests</a>
    </section>
  );
};

export default Managed;
