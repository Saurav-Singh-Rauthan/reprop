import React from "react";
import { Link } from "react-router-dom";

import Styles from "./Home.module.css";

const Home = (props) => {
  return (
    <div className={Styles.parentCont}>
      <div className={Styles.cont}>
        <div className={Styles.cardCont}>
          <p>Rent houses</p>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eaque
            atque, magni mollitia eius cumque quod non ea voluptates dolorum
            quam blanditiis vitae minima quasi asperiores aliquam possimus
            veritatis exercitationem?
          </span>
          <Link to="/rent" className={Styles.btn}>
            Explore
          </Link>
        </div>

        <div className={Styles.cardCont}>
          <p>Buy houses</p>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eaque
            atque, magni mollitia eius cumque quod non ea voluptates dolorum
            quam blanditiis vitae minima quasi asperiores aliquam possimus
            veritatis exercitationem?
          </span>
          <Link to="/buy" className={Styles.btn}>
            Explore
          </Link>
        </div>

        <div className={Styles.cardCont}>
          <p>Sell houses</p>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eaque
            atque, magni mollitia eius cumque quod non ea voluptates dolorum
            quam blanditiis vitae minima quasi asperiores aliquam possimus
            veritatis exercitationem?
          </span>
          <Link to="/sell" className={Styles.btn}>
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
