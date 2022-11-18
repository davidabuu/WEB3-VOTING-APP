import React, { useState } from "react";
import { Button, notification } from "antd";
import { VoteCardStyled } from "./VoteCardStyle";
import { abi, contractAddress } from "../src/constants";
import Image from "next/image";
import { useMoralis, useWeb3Contract } from "react-moralis";
const VoteCard = ({ role, matricNumber, department }) => {
  const { chainId: chainIdHex, isWeb3Enabled } = useMoralis();
  const [loading, setLoading] = useState(false);
  const chainId = parseInt(chainIdHex);
  const votingContractAddress =
    chainId in contractAddress ? contractAddress[chainId][0] : null;
  const {
    runContractFunction: vote,
    isFetching,
    isLoading,
  } = useWeb3Contract({
    abi,
    contractAddress: votingContractAddress,
    functionName: "vote",
  });
  const Vote = async () => {
    await vote();
  };
  return (
    <VoteCardStyled>
      <div className="card-info">
        <p>{role}</p>
        <Image
          src={"/abu.jpg"}
          height="200"
          width="200"
          alt="Abu Codes"
          className="vote-img"
        />
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
