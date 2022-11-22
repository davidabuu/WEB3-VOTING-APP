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
  const [ss, ttt] = useState("");
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
  async function updateUi() {
    const candidates = await getAllCandidates();
    setData(candidates);
  }
  console.log(ss);
  useEffect(() => {
    if (isWeb3Enabled) {
      updateUi();
    }
  }, [isWeb3Enabled]);
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
          {isLoading ? (
            <div>loading</div>
          ) : (
            <div>
              <div className="vote-card">
                {datass.map((item, index) => {
                  if (item[5] == "President") {
                    return (
                      <div key={index}>
                        <VoteCard
                          role={item[5]}
                          matricNumber={item[2]}
                          department={item[1]}
                          fullName={item[0]}
                          voteCount={(item[4] || "").toString()}
                          index={index}
                          functionName="voteForPresident"
                        />
                        {}
                      </div>
                    );
                  }
                })}
              </div>
              <div className="vote-card">
                {datass.map((item, index) => {
                  if (item[5] == "Vice President") {
                    return (
                      <div key={index}>
                        <VoteCard
                          role={item[5]}
                          matricNumber={item[2]}
                          department={item[1]}
                          fullName={item[0]}
                          voteCount={(item[4] || "").toString()}
                          index={index}
                          functionName="voteForVicePresident"
                        />
                        {console.log(index)}
                      </div>
                    );
                  }
                })}
              </div>
              <div className="vote-card">
                {datass.map((item, index) => {
                  if (item[5] == "General Secretary") {
                    return (
                      <div key={index}>
                        <VoteCard
                          role={item[5]}
                          matricNumber={item[2]}
                          department={item[1]}
                          fullName={item[0]}
                          voteCount={(item[4] || "").toString()}
                          index={index}
                          functionName="voteForSecretary"
                        />
                        {}
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          )}
        </div>
        <br></br>
      </div>
    </UserWebLayout>
  );
};

export default Vote;
