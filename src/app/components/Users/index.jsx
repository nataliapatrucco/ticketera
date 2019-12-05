import React, { useState, useEffect } from "react";
import { fetchFilteredUsers, fetchUsers } from "../../redux/actions/user";
import { Title, Container, MainContainer } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { SearchContainer, Rectangle, Search } from "../SearchUsers/style";
import ListUser from "../ListUser";

export default function Users() {
  const [input, setInput] = useState("");
  const users = useSelector(state => state.user.users);
  const filteredUsers = useSelector(state => state.user.filteredUsers);
  const dispatch = useDispatch();

  const handleSearch = () => {
    setInput(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(fetchFilteredUsers(input));
  };

  useEffect(() => {
    filteredUsers
      ? dispatch(fetchFilteredUsers(input))
      : dispatch(fetchUsers());
  }, []);

  return (
    <MainContainer>
      <SearchContainer>
        <form onSubmit={handleSubmit}>
          <Rectangle>
            <Search
              onChange={e => handleSearch(e)}
              placeholder="Buscar usuarios"
            />
          </Rectangle>
        </form>
      </SearchContainer>
      <Container>
        {filteredUsers ? (
          <>
            <Title>USUARIOS ({filteredUsers.length})</Title>
            {filteredUsers.map(user => (
              <ListUser key={user.name} user={user} />
            ))}
          </>
        ) : (
          <>
            <Title>USUARIOS ({users.length})</Title>
            {users.map(user => (
              <ListUser key={user.id} user={user} />
            ))}
          </>
        )}
      </Container>
    </MainContainer>
  );
}
