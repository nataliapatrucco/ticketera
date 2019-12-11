import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/actions/user";
import { Container } from "./style";
// import SearchUsers from "../../components/SearchUsers";
import Users from "../../components/Users";

export default function AdminContainer() {
  const [input, setInput] = useState("");
  const users = useSelector(state => state.user.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleSearch = () => {
    setInput(event.target.value);
  };

  return (
    <Container>
      {/* <SearchUsers /> */}
      {users.length ? <Users /> : ""}
    </Container>
  );
}
