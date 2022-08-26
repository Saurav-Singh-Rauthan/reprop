import React from "react";

import Styles from "./Home.module.css";
import Filterbar from "../../FilterBar/Filterbar";
import Card from "../../Cards/Card/Card";

const Home = (props) => {
  return (
    <div>
      <Filterbar />
      <div className={Styles.results}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
};

export default Home;
