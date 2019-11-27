import React, { useEffect } from "react";
import { Session } from "../session/index";
import { Switch, Route, Redirect } from "react-router-dom";
import { Navbar } from "../containers/Navbar/index";
import Sidebar from "../components/sidebar";
import Dashboard from "../containers/dashboard/index";
import MakeQuestion from "../components/makeQuestion/index";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/actions/user";

export default props => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  return (
    <div>
      {!user.id ? (
        <Session history={props.history} />
      ) : (
        <div>
          <Navbar />
          <Sidebar />
          <Switch>
            <Route exact path="/home" component={Dashboard} />

            <Redirect from="/" to="/home" />
          </Switch>
        </div>
      )}
    </div>
  );
};
