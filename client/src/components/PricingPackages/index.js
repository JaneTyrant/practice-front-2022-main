import React from 'react';
import PricingArticles from './PricingArticles';
import styles from "./PricingPackages.module.scss";

const PricingPackages = () => {

    return (
        <section className={styles.section}>
            <h1 className={styles.heading}>Select a Package for your Managed Branding Contest</h1>
            <div className={styles.container}>
                <div className={styles.row}>
                    <PricingArticles />
                </div>
            </div>
        </section>
    );
}

export default PricingPackages;
