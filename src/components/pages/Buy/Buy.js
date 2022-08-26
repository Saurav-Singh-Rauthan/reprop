import axios from "axios";
import React, { useState, useEffect } from "react";

import Cards from "../../Cards/Cards";
import Filterbar from "../../FilterBar/Filterbar";

const Rent = (props) => {
  const [houses, sethouses] = useState([]);
  const [filter, setfilter] = useState({
    proptype: null,
    date: null,
    price: null,
    location: null,
  });
  const [search, setsearch] = useState({
    val: false,
    filtered: [],
  });

  useEffect(() => {
    axios
      .get("https://reprop-498cb-default-rtdb.firebaseio.com/buy.json")
      .then((res) => {
        console.log(res.data);
        sethouses(res.data);
      });
  }, []);

  const seachHandler = () => {
    let filRes = Object.keys(houses).map((key) => {
      return houses[key];
    });
    console.log(filRes, "filres");

    filRes = filRes.filter((house) => {
      let val = 1;
      if (filter.proptype !== "") {
        val = val && house.type === filter.proptype;
      }
      if (filter.date !== null) {
        console.log(
          filter.date,
          house.movein,
          "check",
          val && new Date(filter.date) >= new Date(house.movein)
        );
        val = val && new Date(filter.date) >= new Date(house.movein);
      }
      if (filter.location !== "") {
        val =
          val && house.address.toLowerCase() === filter.location.toLowerCase();
      }
      if (filter.price !== null) {
        if (filter.price === "low") {
          val = val && house.price >= 500 && house.price <= 1000;
        } else if (filter.price === "mid") {
          val = val && house.price >= 1000 && house.price <= 5000;
        } else if (filter.price === "high") {
          val = val && house.price > 5000;
        }
      }

      if (val) {
        return house;
      }
    });
    setsearch({
      val: true,
      filtered: filRes,
    });
  };

  const switchSearch = () => {
    setsearch({
      ...search,
      val: true,
    });
    seachHandler();
  };

  console.log(filter, "filter");
  console.log(search.filtered, "filtered");

  return (
    <div>
      <Filterbar setfilter={setfilter} clicked={switchSearch} />
      <div>
        <Cards data={search.val ? search.filtered : houses} />
      </div>
    </div>
  );
};

export default Rent;
