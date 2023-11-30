import React from "react";
import styles from "./styles.module.scss";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.sns} ${styles.facebook}`}></div>
      <div className={`${styles.sns} ${styles.youtube}`}></div>
      <div className={`${styles.sns} ${styles.instagram}`}></div>
    </div>
  );
};

export default page;
