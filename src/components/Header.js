import React from "react";
import { HeaderStyle } from "../style/LandingPageStyle";
import Link from 'next/link'

const Header = () => {
  return (
    <HeaderStyle>
      <h2>ZAMPS</h2>
      <ul>
        <Link href='/dashboard'>
          <a>
            <li>DashBoard</li>
          </a>
        </Link>
        <li>About</li>
        <li>Team</li>
        <li className="collect-btn">Connect Wallet</li>
      </ul>
    </HeaderStyle>
  );
};

export default Header;
