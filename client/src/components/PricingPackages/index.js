import React from 'react';
import cx from "classnames";
import data from "./pricing.json";
import styles from "./PricingPackages.module.scss";

const PricingPackages = () => {
    const articleStyles = cx(styles.article, styles["col-md-6"], styles["col-lg-4"], styles["show-content"]);
    const smArticleHeadingStyles = cx(styles["article_heading-container_heading"], styles["none-md"]);
    const mdArticleHeadingStyles = cx(styles["none"], styles["block-md"]);
    const handlerEnter = ({target}) => {
        target.style.backgroundColor = data[0]['colorName']
    }
    const handlerLeave = ({target}) => {
        target.style.backgroundColor = ''
    }
    return (
        <section className={styles.section}>
            <h1 className={styles.heading}>Select a Package for your Managed Branding Contest</h1>
            <div className={styles.container}>
            <div className={styles.row}>
                    {data.map((data) => (
                        <article className={articleStyles} style={{borderColor: `${data.colorName}`}} key={data.id + "article"}>
                            <div className={styles["article_heading-container"]} style={{borderColor: `${data.colorName}`}}>
                                <div className={smArticleHeadingStyles} style={{color: data.colorName}}>
                                    <h2 className={styles["article_heading-container_dropdown-heading"]}>{data.description} {data.price.amount}</h2>
                                    <h2 className={styles["article_heading-container_dropdown-heading"]}>-</h2>
                                </div>
                                <div className={mdArticleHeadingStyles}>
                                    <h2 className={styles["article_heading-container_heading"]} style={{color: data.colorName}}>{data.heading}</h2>
                                    <p className={styles["article_heading-container_description"]}>{data.description}</p>
                                    <p className={styles["article_heading-container_price"]} style={{color: data.colorName}}>{data.price.currency}{data.price.amount}</p>
                                </div>
                            </div>
                            <ul>
                                {data.option.map((option, i) => <li className={styles.article_option} key={i + 'li'}>{option}</li>)}
                                <div className={styles["article_start-container"]}>
                                    <button id="hi" className={styles.article_start} onMouseEnter={handlerEnter} onMouseLeave={handlerLeave} style={{backgroundColor: 'transparent'}}>start</button>
                                </div>
                            </ul>
                        </article>
                    ))}
            </div>
            </div>
        </section>
    );
}

export default PricingPackages;
