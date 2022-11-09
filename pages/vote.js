import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import UserWebLayout from "../components/UserWebLayout";
import AOS from "aos";
import "aos/dist/aos.css";
import VoteCard from "../components/VoteCard";
const Vote = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    setIsModalOpen(true);
    AOS.init();
  }, []);

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <UserWebLayout webtitle="VOTE" data-aos="zoom-in">
      <div style={{ background: "#f4f4f4", minHeight: "100vh" }}>
        <NavBar />
        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
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
        <div className="vote-card">
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
          <VoteCard
            role="President"
            matricNumber="18/ENG02/003"
            department="Computer Enginering"
          />
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
