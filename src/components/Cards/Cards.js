import React from "react";
import Card from "./Card/Card";

import Styles from "./Cards.module.css";

const Cards = (props) => {
  let result = "no data found";

  let houses = [];
  if (props.data) {
    Object.keys(props.data).map((el) => {
      let data = { ...props.data[el], key: { el } };
      houses.push(data);
    });

    console.log(houses, "hous");
    if (houses.length >= 1) {
      result = houses.map((el) => {
        return <Card data={el} />;
      });
    }
  }

  return <div className={Styles.results}>{result}</div>;
};

export default Cards;
