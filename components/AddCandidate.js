import React, { useState } from "react";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { abi, contractAddress } from "../src/constants";
import { Button, Input, notification, Select } from "antd";
import UserWebLayout from "./UserWebLayout";
const AddCandidates = () => {
  const { chainId: chainIdHex, isWeb3Enabled } = useMoralis();
  const [loading, setLoading] = useState(false);
  const chainId = parseInt(chainIdHex);
  const [data, setData] = useState({
    s_fullName: "",
    s_department: "",
    s_matricNumber: "",
    image: "",
    s_voteCount: 0,
  });
  const { s_fullName, s_department, s_matricNumber, image, s_voteCount } = data;
  const gameAddress =
    chainId in contractAddress ? contractAddress[chainId][0] : null;

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(s_fullName, s_department, s_matricNumber, s_voteCount, image);
  };
  const [myrole, setRole] = useState("");
  const {
    runContractFunction: registerCandidate,
    isFetching,
    isLoading,
  } = useWeb3Contract({
    abi,
    contractAddress: gameAddress,
    functionName: "addCandidates",
    params: {
      s_fullName,
      s_department,
      s_matricNumber,
      image,
      s_voteCount,
      s_role: myrole,
    },
  });
  const addANewCandidate = async (e) => {
    setLoading(true);
    e.preventDefault();
    await registerCandidate();
    notification.open({
      description: "Please wait while metemask completes the transaction",
    });
    setLoading(false);
  };
  const handleChange = (event) => {
    setRole(event.target.value);
    console.log(myrole);
  };
  console.log(myrole);
  return (
    <div style={{ backgroundColor: "#f4f4f4", minHeight: "100vh" }}>
      <UserWebLayout webtitle="Add Candidate">
        <div className="form">
          <form onSubmit={addANewCandidate}>
            <h2>REGISTER A CANDIDATE</h2>
            <div className="input-flex">
              <div>
                <label>FullName</label>
                <br></br>

                <Input
                  type="text"
                  placeholder="Enter FullName"
                  onChange={onChange}
                  value={s_fullName}
                  name="s_fullName"
                />
              </div>
              <div>
                <label>Department</label>
                <br></br>

                <Input
                  type="text"
                  placeholder="Enter Departmemt"
                  onChange={onChange}
                  value={s_department}
                  name="s_department"
                />
              </div>
            </div>
            <div className="input-flex">
              <div>
                <label>Matric Number</label>
                <br></br>
                <Input
                  type="text"
                  placeholder="Enter Matric Number"
                  onChange={onChange}
                  value={s_matricNumber}
                  name="s_matricNumber"
                  required
                />
              </div>
              <div>
                <label>Candidates's Image</label>
                <br></br>
                <Input
                  type="text"
                  placeholder="Enter Image URL"
                  onChange={onChange}
                  value={image}
                />
              </div>
            </div>
            <div className="input-flex">
              <div>
                <label>Vote Count</label>
                <br></br>
                <Input
                  type="number"
                  disabled
                  name="s_voteCount"
                  value={s_voteCount}
                />
              </div>
              <div>
                <label>Role</label>
                <br></br>
                <select
                  className="select"
                  onChange={handleChange}
                  value={myrole}
                >
                  <option>Select Role</option>
                  <option>Vice President</option>
                  <option>General Secretary</option>
                </select>
              </div>
            </div>
            <br></br>
            <div>
              <Button
                className="btn-sign"
                loading={loading || isFetching || isLoading}
                htmlType="submit"
              >
                REGISTER
              </Button>
            </div>
          </form>
        </div>
      </UserWebLayout>
    </div>
  );
};

export default AddCandidates;
