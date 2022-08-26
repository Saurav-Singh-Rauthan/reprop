import React from "react";

import Card from "../../Cards/Card/Card";
import Filterbar from "../../FilterBar/Filterbar";

const Rent = (props) => {
  return (
    <div>
      <Filterbar />
      <div >
        <Card />
      </div>
    </div>
  );
};

export default Rent;
