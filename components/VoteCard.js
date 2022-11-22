import React, { useState } from "react";
import { Button, notification } from "antd";
import { VoteCardStyled } from "./VoteCardStyle";
import { abi, contractAddress } from "../src/constants";
import Image from "next/image";
import { useMoralis, useWeb3Contract } from "react-moralis";
const VoteCardForPresident = ({
  role,
  matricNumber,
  functionName,
  department,
  voteCount,
  fullName,
  index,
}) => {
  const { chainId: chainIdHex } = useMoralis();
  const chainId = parseInt(chainIdHex);
  const votingContractAddress =
    chainId in contractAddress ? contractAddress[chainId][0] : null;
  const {
    runContractFunction: voteForPresident,
    isFetching,
    isLoading,
  } = useWeb3Contract({
    abi,
    contractAddress: votingContractAddress,
    functionName,
    params: {
      index,
    },
  });
  const presidentVote = async () => {
    const vote = await voteForPresident();
    console.log(vote);
    // await vote();
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
        <p>FullName: {fullName}</p>
        <p>Matric No: {matricNumber}</p>
        <p>Department: {department}</p>
        <p>Vote Count: {voteCount}</p>
        <div onClick={presidentVote}>
          <Button className="vote-btn">VOTE</Button>
        </div>
      </div>
    </VoteCardStyled>
  );
};

export default VoteCardForPresident;
