import styled from "styled-components";

export const DashBoardStyle = styled.div`
  display: flex;
  align-items: space-between;
  justify-content: center;
  margin-top: 100px;
  .div-one {
    margin-right: 15px;
    ul {
      background: #333;
      border-radius: 10px;
      // text-align: center;
      display: flex;
      flex-direction: column;
      // align-items: center;
      justify-content: space-around;
      color: #fff;
      padding: 10px 30px;
      font-size: 24px;
      height: 400px;
      padding-bottom: 30px;
    }
    li {
      display: flex;
      align-items: center;
      margin-top: 10px;
    }
  }
  @media (max-width: 900px) {
    flex-direction: column;
    margin: 50px 1.5rem;
    .div-one {
      width: 80%;
    }
  }
  @media (max-width: 600px) {
    .div-one {
      width: 100%;
    }
  }
`;
