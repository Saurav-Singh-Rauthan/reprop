import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Styles from "./Navbar.module.css";
import BusinessIcon from "@mui/icons-material/Business";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavbarDesk = (props) => {
  const [open, setopen] = useState(0);

  const openHandler = (type) => {
    if (type === "open") {
      setopen(1);
    } else {
      setopen(0);
    }
  };

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

      <div className={Styles.hamburger} onClick={() => openHandler("open")}>
        <MenuIcon />
      </div>

      <div
        className={[
          Styles.navbarMob,
          open ? Styles.opened : Styles.closed,
        ].join(" ")}
        onClick={() => openHandler("close")}
      >
        <div className={Styles.close} onClick={() => openHandler("close")}>
          <CloseIcon />
        </div>
        <div className={Styles.logo}>
          <BusinessIcon sx={{ color: "#7064f6" }} fontSize={"large"} />
          <NavLink to={"/"} className={Styles.logotext}>
            Reprop
          </NavLink>
        </div>
        <div className={Styles.authMob}>
          <button className={Styles.login}>Login</button>
          <button className={Styles.signup}>Sign up</button>
        </div>
        <div className={Styles.linksMob}>
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
    </div>
  );
};

export default NavbarDesk;
