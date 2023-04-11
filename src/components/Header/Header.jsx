import React from "react";
import "./Header.css";
import Bars from "../../assets/bars.png";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { Link } from "react-scroll";
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false,
    [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header">
      <img className="logo" alt="logo" src={logo} />
      {menuOpened === false && mobile === true ? (
        <div className="bars" onClick={() => setMenuOpened(true)}>
          <img src={Bars} alt="" />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
          <Link
              onClick={() => setMenuOpened(false)}
              to="hero"
              span={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link  onClick={() => setMenuOpened(false)}
              to="programs"
              span={true}
              smooth={true}>Program</Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpened(false)}
              to="reasons"
              span={true}
              smooth={true}>Plans</Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpened(false)}
              to="reasons"
              span={true}
              smooth={true}>Why Us</Link>
          </li>
         
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="testimonais"
              span={true}
              smooth={true}
            >
              Testimonais
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
