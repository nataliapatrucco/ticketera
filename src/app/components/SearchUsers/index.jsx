// import React, { useState, useEffect } from "react";
// import { fetchFilteredUsers, fetchUsers } from "../../redux/actions/user";
// import { useDispatch, useSelector } from "react-redux";
// import { Rectangle, SearchIcon, Search, Container } from "./style";

// export default function SearchUsers() {
//   const dispatch = useDispatch();
//   const [input, setInput] = useState("");
//   const users = useSelector(state => state.user.users);

//   const handleSearch = () => {
//     setInput(event.target.value);
//   };
//   const handleSubmit = event => {
//     event.preventDefault();
//     input ? dispatch(fetchFilteredUsers(input)) : dispatch(fetchUsers());
//   };

//   return (
//     <Container>
//       <form onSubmit={handleSubmit}>
//         <Rectangle>
//           <Search
//             onChange={e => handleSearch(e)}
//             placeholder="Buscar usuarios"
//           />
//         </Rectangle>
//       </form>
//     </Container>
//   );
// }
