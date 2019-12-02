import React, { useEffect } from "react";
import { Session } from "../session/index";
import { Switch, Route, Redirect } from "react-router-dom";
import { Navbar } from "../containers/Navbar/index";
import Sidebar from "../components/sidebar";
import Processing from "../containers/dashboard/index";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/actions/user";
import UserTickets from "../components/UserTickets";
import { HomeDiv, Container, SideDiv, Section, MiddleContainer } from "./style";
import OpenContainer from "../containers/dashboard/partials";
import SingleContainer from "../containers/singleTicket";

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
            <Sidebar />
          </SideDiv>
          <Section>
            <Navbar />
            <MiddleContainer>
              <Switch>
                <Route exact path="/" component={OpenContainer} />
                <Route exact path="/userTickets" component={UserTickets} />
                <Route exact path="/:slug" component={SingleContainer} />
              </Switch>
              <Processing />
            </MiddleContainer>
          </Section>
        </Container>
      )}
    </HomeDiv>
  );
};
