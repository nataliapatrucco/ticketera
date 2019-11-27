import React from "react";
import { Session } from "../session/index";
import { Switch, Route } from "react-router-dom";
import { Navbar } from "../containers/Navbar/index";
import Sidebar from "../components/sidebar";
import Dashboard from "../containers/dashboard/index";

export default () => (
  <div>
    {/* <Session /> */}
    <Navbar />
  </div>
);
