import React, { useState } from "react";
import { HeaderStyle, MobileNavStyle, NavBarStyle } from "../style/LandingPageStyle";
import Link from "next/link";
import { Menu } from "@material-ui/icons";

const Header = () => {
  const [nav, setNav]  = useState(true);
  const navFunction = () => {
    setNav(!nav)
  }
  return (
    <NavBarStyle>
      <HeaderStyle>
        <h2>ZAMPS</h2>
        <ul className="desktop-nav">
          <Link href="/dashboard">
            <a>
              <li>Dashboard</li>
            </a>
          </Link>
          <li>About</li>
          <li>Team</li>
          <li className="collect-btn">Connect Wallet</li>
        </ul>
        <div className="menu">
        <Menu onClick={navFunction} />
        </div>
      </HeaderStyle>
      <MobileNavStyle>
        <div className={`${nav ?'hide-nav' : 'mobile-nav'} nav`}>
          <ul>
            <Link href="/dashboard">
              <a>
                <li>DashBoard</li>
              </a>
            </Link>
            <li>About</li>
            <li>Team</li>
            <li className="connect-btn">Connect Wallet</li>
          </ul>
        </div>
      </MobileNavStyle>
    </NavBarStyle>
  );
};

export default Header;
