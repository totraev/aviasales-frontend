import React, { SFC } from "react";
import styles from "./Header.module.css";

const Header: SFC = () => (
  <div className={styles.header}>
    <img src={require("./svg/logo.svg")} alt="Aviasales" />
  </div>
);

export default Header;
