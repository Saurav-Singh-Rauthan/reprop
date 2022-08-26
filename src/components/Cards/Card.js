import React from "react";
import Card from "./Card/Card";

const Cards = (props) => {
  return props.data?.map((el) => {
    return <Card key={el.key} />;
  });
};

export default Cards;
