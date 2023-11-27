import React from "react";
import styles from "./styles.module.scss";

const page = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.child1}>SCSS_1</div>
      <div className={styles.nav_child2}>SCSS_2</div>
    </div>
  );
};

export default page;
