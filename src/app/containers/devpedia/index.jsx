import React, { useState, useEffect } from "react";
import { fetchClosed } from "../../redux/actions/search";
import { Title, ClosedSection, Container } from "./style";
import Open from "../../components/Open";
import { useDispatch, useSelector } from "react-redux";

export default () => {
  const dispatch = useDispatch();
  const closed = useSelector(state => state.devpedia.closed);
  const searchedTickets = useSelector(state => state.devpedia.searched);

  useEffect(() => {
    dispatch(fetchClosed());
  }, [searchedTickets]);

  return (
    <Container>
      <Title>PREGUNTAS RESPONDIDAS</Title>
      {searchedTickets.length ? (
        <ClosedSection>
          {searchedTickets.map(ticket => (
            <Open ticket={ticket} />
          ))}
        </ClosedSection>
      ) : (
        <ClosedSection>
          {closed && closed.map(ticket => <Open ticket={ticket} />)}
        </ClosedSection>
      )}
    </Container>
  );
};
