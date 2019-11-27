import React from "react";
import { Session } from "../session/index";
import { Switch, Route } from "react-router-dom";
import MakeQuestion from "../components/makeQuestion/index";

export default () => (
  <div>
    {/* <Session /> */}
    <MakeQuestion />
  </div>
);
