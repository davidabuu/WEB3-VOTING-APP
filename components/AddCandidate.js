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
    fullName: "",
    department: "",
    matricNumber: "",
    image: "",
    voteCount: 0,
  });
  const { fullName, department, matricNumber, image, voteCount } = data;
  const votingContractAddress =
    chainId in contractAddress ? contractAddress[chainId][0] : null;

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(fullName, department, matricNumber, voteCount, image);
  };
  const [myrole, setRole] = useState("");
  const {
    runContractFunction: registerCandidate,
    isFetching,
    isLoading,
  } = useWeb3Contract({
    abi,
    contractAddress: votingContractAddress,
    functionName: "addCandidates",
    params: {
      fullName,
      department,
      matricNumber,
      image,
      voteCount,
      role: myrole,
    },
  });
  const addANewCandidate = async (e) => {
    if (isWeb3Enabled) {
      setLoading(true);
      e.preventDefault();
      const data = await registerCandidate();
      setLoading(false);
      notification.info({
        description: "Please wait while Metamask completes the transaction",
      });
    } else {
      notification.error({
        description: "Please connect to your wallet",
      });
    }
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
                  value={fullName}
                  name="fullName"
                />
              </div>
              <div>
                <label>Department</label>
                <br></br>

                <Input
                  type="text"
                  placeholder="Enter Departmemt"
                  onChange={onChange}
                  value={department}
                  name="department"
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
                  value={matricNumber}
                  name="matricNumber"
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
                  name="image"
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
                  name="voteCount"
                  value={voteCount}
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
              <Button className="btn-sign" loading={loading} htmlType="submit">
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
