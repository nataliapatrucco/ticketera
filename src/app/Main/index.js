import React from "react";
import { Session } from "../session/index";
import { Switch, Route } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Dashboard from "../containers/dashboard/index";
import MakeQuestion from "../components/makeQuestion/index";

export default () => <Dashboard />;
