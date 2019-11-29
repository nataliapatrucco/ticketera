import React, { useEffect } from "react";
import { Session } from "../session/index";
import { Switch, Route, Redirect } from "react-router-dom";
import { Navbar } from "../containers/Navbar/index";
import Sidebar from "../components/sidebar";
import Dashboard from "../containers/dashboard/index";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/actions/user";
import UserTickets from "../components/UserTickets";
import { HomeDiv, Container, SideDiv, Section } from "./style";

export default props => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  return (
    <HomeDiv>
      {!user.id ? (
        <Session history={props.history} />
      ) : (
        <Container>
          <SideDiv>
            <Sidebar/>
          </SideDiv>
          <Section>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/userTickets" component={UserTickets}/>
              {/* <Redirect from="/" to="/home" /> */}
            </Switch>
          </Section>
        </Container>
      )}
    </HomeDiv>
  );
};
