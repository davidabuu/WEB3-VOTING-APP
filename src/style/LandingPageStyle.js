import styled from "styled-components";

export const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  background-color: #000;
  color: #fff;
  justify-content: space-around;
  padding:10px;
  padding-top:15px;
  border-bottom: 1px solid #fff;
  ul li {
    list-style: none;
    display: inline-flex;
    padding: 0 20px;
  }
  a{
    color:#fff;
  }
  h2{
    color:#fff;
  }
  .collect-btn {
    background: var(--primary-color);
    color: #000;
    box-shadow: 0 2px 0px 2px #0000058;
    padding: 5px 20px;
    border-radius: 20px;
    cursor:pointer;
  }
  ul li:hover{
    color:var(--primary-color);
    cursor:pointer;
  }
  .collect-btn:hover{
    background:#333;
    color:#fff;
  }
  @media(max-width:700px){
    ul li {
      padding:0 10px;
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
    display:flex;
    flex-direction:column;
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
  .business{
    font-size:17px;
  }
  .learn {
    background: var(--primary-color);
    color: #000;
    font-size: 15px;
    padding: 10px 10px;
    width: 200px;
    border-radius: 25px;
  }
  .learn:hover{
    cursor:pointer;
  }
  .mint {
    background: #333;
    color: var(--primary-color);
    font-size: 15px;
    padding: 10px 10px;
    width: 200px;
    border-radius: 25px;
  }
  .mint:hover{
    cursor:pointer;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    .text {
      font-size: 30px;
    }
    img {
      width: 300px;
    }
  }
`;
