import styled from "styled-components";

export const CreateFormStyled = styled.div`
  background: #333;
  padding: 20px;
  color: #fff;
  border-radius: 10px;
  input,
  textarea {
    background-color: #e2e1e5;
  }
  form {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .tree {
      margin-left: 10px;
    }
  }
  button {
    padding: 5px;
    background-color: var(--primary-color);
    color: #000;
    border: none;
    font-size: 14px;
    font-weight: bold;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  @media (max-width: 600px) {
    width:100%;
    form {
      flex-direction: column;
    }
    .tree {
      margin-left: 0px !important;
    }
  }
`;
