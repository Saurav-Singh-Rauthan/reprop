import React from "react";
import { NavLink } from "react-router-dom";

import Styles from "./NavbarDesk.module.css";
import BusinessIcon from "@mui/icons-material/Business";

const NavbarDesk = (props) => {
  return (
    <div className={Styles.cont}>
      <div className={Styles.options}>
        <div className={Styles.logo}>
          <BusinessIcon sx={{ color: "#7064f6" }} fontSize={"large"} />
          <NavLink to={"/"} className={Styles.logotext}>
            Reprop
          </NavLink>
        </div>
        <div className={Styles.links}>
          <NavLink
            to={"/rent"}
            className={({ isActive }) =>
              isActive ? [Styles.active, Styles.link].join(" ") : Styles.link
            }
          >
            Rent
          </NavLink>
          <NavLink
            to={"/buy"}
            className={({ isActive }) =>
              isActive ? [Styles.active, Styles.link].join(" ") : Styles.link
            }
          >
            Buy
          </NavLink>
          <NavLink
            to={"/sell"}
            className={({ isActive }) =>
              isActive ? [Styles.active, Styles.link].join(" ") : Styles.link
            }
          >
            Sell
          </NavLink>
        </div>
      </div>
      <div className={Styles.auth}>
        <button className={Styles.login}>Login</button>
        <button className={Styles.signup}>Sign up</button>
      </div>
    </div>
  );
};

export default NavbarDesk;
