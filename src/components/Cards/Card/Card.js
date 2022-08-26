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
          src="https://cdn.confident-group.com/wp-content/uploads/2021/08/26224309/oakwood_gallery_image.jpg"
          alt=""
          style={{ width: "100%", objectFit: "cover", borderRadius: "8px" }}
        />
      </div>
      <div className={Styles.desc}>
        <div className={Styles.priceCont}>
          <p className={Styles.price}>
            $2500 <span className={Styles.pricespan}>/month</span>
          </p>
          <FavoriteIcon sx={{ color: "#7064f6", cursor: "pointer" }} />
        </div>

        <p className={Styles.name}>Name</p>
        <p className={Styles.address}>Address</p>

        <div className={Styles.details}>
          <div className={Styles.icons}>
            <BedIcon fontSize="small" sx={{ color: "#7064f6" }} /> 3 beds
          </div>
          <div className={Styles.icons}>
            <BathtubIcon fontSize="small" sx={{ color: "#7064f6" }} /> 2
            bathrooms
          </div>
          <div className={Styles.icons}>
            <CropSquareIcon fontSize="small" sx={{ color: "#7064f6" }} /> 6x7.5
            m²
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
