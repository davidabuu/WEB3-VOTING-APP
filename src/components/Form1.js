import React from "react";
import { DashBoardStyle } from "./DashboardStyle";
import UserWebLayout from "./UserWebLayout";
import {
  AddBox,
  AttachMoney,
  NearMe,
  Settings,
  LinkSharp,
} from "@material-ui/icons";
import CreateForm from "../CreateForm";
const Form1 = () => {
  return (
    <div>
      <UserWebLayout webtitle="Dashboard">
        <DashBoardStyle>
          <div className="div-one">
            <ul>
              <li>
                <AddBox /> Create
              </li>
              <li>
                <AttachMoney /> Collect
              </li>
              <li>
                <NearMe /> Transfer
              </li>
              <li>
                <LinkSharp /> Royalties
              </li>
              <li>
                <Settings /> Settings
              </li>
            </ul>
          </div>
          <CreateForm />
        </DashBoardStyle>
      </UserWebLayout>
    </div>
  );
};

export default Form1;
