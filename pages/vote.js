import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { abi, contractAddress } from "../src/constants";
import UserWebLayout from "../components/UserWebLayout";
import AOS from "aos";
import "aos/dist/aos.css";
import VoteCard from "../components/VoteCard";
import { useMoralis, useWeb3Contract } from "react-moralis";
const Vote = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { chainId: chainIdHex, isWeb3Enabled } = useMoralis();
  const [loading, setLoading] = useState(false);
  const chainId = parseInt(chainIdHex);
  const [datass, setData] = useState([""]);
  // useEffect(() => {
  //   setIsModalOpen(true);
  //   AOS.init();
  // }, []);

  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };
  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };
  const votingContractAddress =
    chainId in contractAddress ? contractAddress[chainId][0] : null;
  const {
    runContractFunction: getAllCandidates,
    isFetching,
    isLoading,
  } = useWeb3Contract({
    abi,
    contractAddress: votingContractAddress,
    functionName: "getAllCandidate",
  });
  async function updateUi (){
    const candidates = await getAllCandidates();
    setData(candidates);
    console.log(datass);
  }
  useEffect(() => {
    if(isWeb3Enabled){
      updateUi()
    }
  }, [isWeb3Enabled]);
  console.log(datass);
  return (
    <UserWebLayout webtitle="VOTE" data-aos="zoom-in">
      <div style={{ background: "#f4f4f4", minHeight: "100vh" }}>
        <NavBar />
        <Modal
          title="Basic Modal"
          // open={isModalOpen}
          // onOk={handleOk}
          // onCancel={handleCancel}
        >
          <p style={{ fontWeight: "bold" }}>
            Note: You are only requried to Vote Once for a Particular Category
          </p>
          <p style={{ fontWeight: "bold" }}>
            Once You Voted You can't vote Again
          </p>
        </Modal>
        <div className="vote-info">
          <p>Your Vote Counts Your Vote is Secured</p>
          <p>You can only Vote Once</p>
        </div>
        <div>
          {
            /* {isLoading ? <div>loading...</div> : <div>{data[0][0]}</div>} */
            !votingContractAddress ? (
              <div>loading</div>
            ) : (
              <div className="vote-card">
                <VoteCard
                  role="President"
                  matricNumber="18/ENG02/003"
                  department={datass[0][0]}
                />

                <VoteCard
                  role="President"
                  matricNumber="18/ENG02/003"
                  department="Computer Enginering"
                />
                <VoteCard
                  role="President"
                  matricNumber="18/ENG02/003"
                  department="Computer Enginering"
                />
              </div>
            )
          }
        </div>
        <br></br>
        <div className="vote-card">
          <VoteCard
            role="Vice President"
            matricNumber="18/ENG02/003"
            department="Computer Enginering"
          />
          <VoteCard
            role="Vice President"
            matricNumber="18/ENG02/003"
            department="Computer Enginering"
          />
          <VoteCard
            role="Vice President"
            matricNumber="18/ENG02/003"
            department="Computer Enginering"
          />
        </div>
        <br></br>
        <div className="vote-card">
          <VoteCard
            role="Secretary"
            matricNumber="18/ENG02/001"
            department="Chemical Enginering"
          />
          <VoteCard
            role="Secretary"
            matricNumber="18/ENG02/001"
            department="Civil Enginering"
          />
          <VoteCard
            role="Secretary"
            matricNumber="18/ENG02/001"
            department="Civil Enginering"
          />
        </div>
      </div>
    </UserWebLayout>
  );
};

export default Vote;
