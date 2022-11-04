import styled from "styled-components";

export const LandingPageStyle = styled.div`
  h2 {
    text-align: center;
    font-size: 30px;
    margin-top: 20px;
    font-weight: bold;
    text-transform: uppercase;
  }
  .nuesa {
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-size: 50px;
      font-weight: bold;
      text-transform: uppercase;
      color: var(--primary-color);
    }
  }
  .contd-btn {
    text-align: center;
  }
  button {
    width: 300px;
    background: var(--primary-color);
    color: #fff;
    border-radius: 5px;
  }
  button:hover {
    color: #fff;
    background: var(--button-color);
  }
  @media (max-width: 900px) {
    h2 {
      font-size: 20px;
      margin-top: 50px;
    }
    .nuesa {
      flex-direction: column;
      p {
        font-size: 25px;
      }
      img {
        width: 200px;
      }
    }
  }
`;
