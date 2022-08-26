import React from "react";

import Card from "../../Cards/Card/Card";
import Filterbar from "../../FilterBar/Filterbar";
import Styles from "./Buy.module.css";

const Rent = (props) => {
  return (
    <div>
      <Filterbar />
      <div className={Styles.results}>
        <Card />
      </div>
    </div>
  );
};

export default Rent;
