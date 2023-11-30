import React from "react";
import styles from "./styles.module.scss";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.status} ${styles.opened}`}>OPENED</div>
      <div className={`${styles.status} ${styles.progress}`}>IN PROGRESS</div>
      <div className={`${styles.status} ${styles.resolved}`}>RESOLVED</div>
      <div className={`${styles.status} ${styles.closed}`}>CLOSED</div>
    </div>
  );
};

export default page;
