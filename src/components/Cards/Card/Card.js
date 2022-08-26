import React from "react";

import Styles from "./Card.module.css";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Card = (props) => {
  return (
    <div className={Styles.cont}>
      <div className={Styles.img}>
        <img
          src={props.data?.img}
          alt=""
          style={{ width: "100%", objectFit: "cover", borderRadius: "8px" }}
        />
      </div>
      <div className={Styles.desc}>
        <div className={Styles.priceCont}>
          <p className={Styles.price}>
            ${props.data?.price}{" "}
            <span
              className={Styles.pricespan}
              style={{ display: props.type === "rent" ? null : "none" }}
            >
              /month
            </span>
          </p>
          <FavoriteIcon sx={{ color: "#7064f6", cursor: "pointer" }} />
        </div>

        <p className={Styles.name}>{props.data?.name}</p>
        <p className={Styles.address}>{props.data?.address}</p>

        <div className={Styles.details}>
          <div className={Styles.icons}>
            <BedIcon fontSize="small" sx={{ color: "#7064f6" }} />{" "}
            {props.data?.bedrooms} bed(s)
          </div>
          <div className={Styles.icons}>
            <BathtubIcon fontSize="small" sx={{ color: "#7064f6" }} />
            {props.data?.bathrooms} bathrooms
          </div>
          <div className={Styles.icons}>
            <CropSquareIcon fontSize="small" sx={{ color: "#7064f6" }} />{" "}
            {props.data?.area} m²
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
