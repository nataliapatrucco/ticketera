import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOpen, fetchProcessing } from "../../redux/actions/tickets";
import Open from "../../components/Open";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const open = useSelector(state => state.tickets.open);
  const processing = useSelector(state => state.tickets.processing);

  useEffect(() => {
    dispatch(fetchOpen());
    dispatch(fetchProcessing());
  }, []);

  return (
    <div>
      {open.map(ticket => (
        <div key={ticket.id}>
          <Open ticket={ticket} />
        </div>
      ))}
    </div>
  );
};
