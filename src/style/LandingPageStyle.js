import styled from "styled-components";
export const NavBarStyle = styled.div`
  .nav {
    display: none;
  }
`;
export const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  background-color: #000;
  color: #fff;
  justify-content: space-around;
  padding: 10px 15px;
  padding-top: 15px;
  border-bottom: 1px solid #fff;
  ul li {
    list-style: none;
    display: inline-flex;
    padding: 0 20px;
  }
  a {
    color: #fff;
  }
  h2 {
    color: #fff;
  }
  .collect-btn {
    background: var(--primary-color);
    color: #000;
    box-shadow: 0 2px 0px 2px #0000058;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
  }
  ul li:hover {
    color: var(--primary-color);
    cursor: pointer;
  }
  .collect-btn:hover {
    background: #333;
    color: #fff;
  }
  .menu {
    display: none;
    cursor: pointer;
  }
  @media (max-width: 540px) {
    .desktop-nav {
      display: none;
    }
    .menu {
      display: block;
    }
  }
`;

export const MobileNavStyle = styled.div`
  .mobile-nav {
    display: none;
  }
  @media (max-width: 540px) {
    .mobile-nav,
    .hide-nav {
      display: block;
      position: absolute;
      z-index: 4;
      background: #333;
      width: 100%;
      height: max-content;
      padding: 10px 0px 0px 10px;
      color: #fff;
      transition: all 0.5s ease;
    }
    .hide-nav {
      transform: translateY(-200px);
    }
    .mobile-nav {
      transform: translateY(0px);
    }
    a {
      color: #fff;
    }
    li:hover {
      color: var(--primary-color);
    }
    .connect-btn {
      background: var(--primary-color);
      color: #000;
      box-shadow: 0 2px 0px 2px #0000058;
      padding: 3px;
      border-radius: 5px;
      cursor: pointer;
      width: max-content;
    }
    .connect-btn:hover {
      color: #fff;
      background: #000;
    }
  }
`;
export const HomePageStyled = styled.div`
  background-color: #000;
`;

export const IntroStyle = styled.div`
  display: flex;
  background-color: #000;
  color: #fff;
  align-items: center;
  margin-top: 20px;
  justify-content: center;
  .text {
    display: flex;
    flex-direction: column;
    font-size: 50px;
    font-weight: bold;
  }
  p {
    margin: 0px !important;
  }
  h3,
  h1,
  h2 {
    margin: 0px;
  }
  .business {
    font-size: 17px;
  }
  .learn {
    background: var(--primary-color);
    color: #000;
    font-size: 15px;
    padding: 10px 10px;
    width: 200px;
    border-radius: 25px;
  }
  .learn:hover {
    cursor: pointer;
  }
  .mint {
    background: #333;
    color: var(--primary-color);
    font-size: 15px;
    padding: 10px 10px;
    width: 200px;
    border-radius: 25px;
  }
  .marketing {
    transform: translateY(-20px);
  }
  .mint:hover {
    cursor: pointer;
  }
  @media(max-width:1000px){
    img {
      width: 400px;
    }
  }
  @media (max-width: 900px) {
    flex-direction: column;
    .text {
      font-size: 30px;
    }
    img {
      width: 300px;
    }
    .marketing {
      transform: translateY(-5px);
    }
  }
  @media (max-width: 600px) {
    padding: 0px  9px;
    .mint {
      margin-top: 10px;
    }
    .learn,
    .mint {
      padding: 5px;
      border-radius: 10px;
    }
  }
`;
