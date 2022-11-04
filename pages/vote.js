import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import UserWebLayout from "../components/UserWebLayout";
import AOS from "aos";
import "aos/dist/aos.css";
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
    <UserWebLayout webtitle="Vote" data-aos="zoom-in">
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
    </UserWebLayout>
  );
};

export default Vote;
