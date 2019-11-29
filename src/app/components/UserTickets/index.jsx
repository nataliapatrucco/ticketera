import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserTickets } from "../../redux/actions/tickets";

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserTickets());
  }, []);

  const tickets = useSelector(state => state.tickets.userTickets);

  return <div></div>;
};
