import React, { useEffect, useState } from "react";
import {
  HeaderStyle,
  MobileNavStyle,
  NavBarStyle,
} from "../style/LandingPageStyle";
import Link from "next/link";
import { Menu } from "@material-ui/icons";

const Header = () => {
  const [address, setAddress] = useState("");
  const [connect, setConnect] = useState("Connect Wallet");
  useEffect(() => {}, [address]);
  const connectWallet = async () => {
    try {
      if (typeof window.ethereum !== "undefined") {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAddress(accounts[0]);
        setConnect("Connected");
      } else {
        alert("Please install metamask");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [nav, setNav] = useState(true);
  const navFunction = () => {
    setNav(!nav);
  };
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
          <li className="connect-btn" onClick={connectWallet}>
            {connect}
          </li>
        </ul>
        <div className="menu">
          <Menu onClick={navFunction} />
        </div>
      </HeaderStyle>
      <MobileNavStyle>
        <div className={`${nav ? "hide-nav" : "mobile-nav"} nav`}>
          <ul>
            <Link href="/dashboard">
              <a>
                <li>DashBoard</li>
              </a>
            </Link>
            <li>About</li>
            <li>Team</li>
            <li className="connect-btn" onClick={connectWallet}>
              Connect Wallet
            </li>
          </ul>
        </div>
      </MobileNavStyle>
    </NavBarStyle>
  );
};

export default Header;
