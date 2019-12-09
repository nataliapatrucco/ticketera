import React, { useEffect } from "react";
import { Session } from "../session/index";
import { Switch, Route, useHistory } from "react-router-dom";
import { Navbar } from "../containers/Navbar/index";
import Sidebar from "../components/sidebar";
import Processing from "../containers/dashboard/index";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/actions/user";
import UserTickets from "../components/UserTickets";
import AdminContainer from "../containers/AdminContainer";
import Devpedia from "../containers/devpedia";

import {
  HomeDiv,
  Container,
  SideDiv,
  Section,
  MiddleContainer,
  CenterDiv,
  ProcessDiv
} from "./style";
import OpenContainer from "../containers/dashboard/partials";
import SingleContainer from "../containers/singleTicket";
import Socket from "../socket";

export default props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.user.user);

  // inicializa socket solo cuando tenga el usuario
  Socket.init(user.id);

  // Socket on ticketdelete
  Socket.on("deleted", message => {
    console.log("SKLEREREERERE", message);
  });
  useEffect(() => {
    dispatch(fetchUser());
    if (!user.id) {
      history.push("/");
    }
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
            <Navbar history={props.history} />
            <MiddleContainer>
              <CenterDiv>
                <Switch>
                  {user.isAdmin ? (
                    <Route
                      exact
                      path="/admin/users"
                      component={AdminContainer}
                    />
                  ) : (
                    ""
                  )}

                  <Route exact path="/" component={OpenContainer} />
                  <Route path="/userTickets/:status" component={UserTickets} />
                  <Route exact path="/devpedia" component={Devpedia} />
                  <Route exact path="/:slug" component={SingleContainer} />
                </Switch>
              </CenterDiv>
              <ProcessDiv>
                <Processing />
              </ProcessDiv>
            </MiddleContainer>
          </Section>
        </Container>
      )}
    </HomeDiv>
  );
};
