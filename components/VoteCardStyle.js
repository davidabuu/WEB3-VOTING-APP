import styled from "styled-components";

export const VoteCardStyled = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .card-info {
    text-align: center;
    font-weight: bold;
    img {
      width: 100px;
      clip-path: circle();
    }
    .vote-btn {
      background: var(--primary-color);
      color: #fff;
      width: 50%;
    }
  }
`;
