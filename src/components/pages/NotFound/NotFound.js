import { Link } from "react-router-dom";

import Styles from "./NotFound.module.css";
import nfImg from "../../../assests/undraw_page_not_found_re_e9o6.svg";

const NotFound = (props) => {
  return (
    <div className={Styles.cont}> 
      <img src={nfImg} alt="page not found 404" className={Styles.img} />
      <p>Can't find the requested page</p>
      <Link to="/" className={Styles.btn}>Back to Home</Link>
    </div>
  );
};

export default NotFound;
