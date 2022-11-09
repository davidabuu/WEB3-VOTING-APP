import React from "react";
import { Button, notification } from "antd";
import { VoteCardStyled } from "./VoteCardStyle";

const VoteCard = ({ role, matricNumber, department }) => {
    const Vote = () => {
        notification.success({
            description:'Vote Was A Success',
            duration:1000
        })
    }
  return (
    <VoteCardStyled>
      <div className="card-info">
      <p>{role}</p>
        <img src="./abu.jpg" alt="Abu Codes" className="vote-img" />
        <p>Matric No: {matricNumber}</p>
        <p>Department: {department}</p>
        <p>Vote Count: 0</p>
     <div onClick={Vote}>
     <Button className="vote-btn">VOTE</Button>
     </div>
      </div>
    </VoteCardStyled>
  );
};

export default VoteCard;
