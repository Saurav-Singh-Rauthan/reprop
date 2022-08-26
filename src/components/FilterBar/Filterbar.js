import React, { useState, useEffect } from "react";

import Styles from "./Filterbar.module.css";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Filterbar = (props) => {
  const [proptype, setProptype] = useState("");
  const [date, setDate] = useState(null);
  const [price, setPrice] = useState(null);
  const [location, setLocation] = useState("");

  useEffect(() => {
    props.setfilter({
      proptype: proptype,
      date: date ? new Date(date).toLocaleDateString() : null,
      price: price,
      location: location,
    });
  }, [proptype, date, price, location]);

  const handleChange = (event, type) => {
    if (type === "price") {
      setPrice(event.target.value);
    } else if (type === "loc") {
      setLocation(event.target.value);
    } else if (type === "property") {
      setProptype(event.target.value);
    }
  };

  return (
    <div className={Styles.cont}>
      <TextField
        id="outlined-basic"
        label="Location"
        variant="outlined"
        className={Styles.formel}
        value={location}
        onChange={(event) => handleChange(event, "loc")}
      />

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Move-in date"
          value={date}
          onChange={(newValue) => {
            setDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <FormControl
        fullWidth
        className={Styles.formel}
        sx={{ width: window.innerWidth > 1000 ? "20%" : "100%" }}
      >
        <InputLabel id="demo-simple-select-label">Price</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={price}
          label="Price"
          onChange={(event) => handleChange(event, "price")}
        >
          <MenuItem value={"low"}>$500 - $1000</MenuItem>
          <MenuItem value={"mid"}>$1000 - $5000</MenuItem>
          <MenuItem value={"high"}>$5000 - $10000</MenuItem>
        </Select>
      </FormControl>

      <FormControl
        fullWidth
        className={Styles.formel}
        sx={{ width: window.innerWidth > 1000 ? "20%" : "100%" }}
      >
        <InputLabel id="demo-simple-select-label">Property Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={proptype}
          label="Property Type"
          onChange={(event) => handleChange(event, "property")}
        >
          <MenuItem value={"villa"}>Villa</MenuItem>
          <MenuItem value={"bungalow"}>Bungalow</MenuItem>
          <MenuItem value={"flat"}>Flat</MenuItem>
        </Select>
      </FormControl>

      <button className={Styles.searchBtn} onClick={props.clicked}>
        Search
      </button>
    </div>
  );
};

export default Filterbar;
