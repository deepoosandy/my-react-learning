import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (username, userAge) => {
    setUsersList((prefUserList) => {
      return [...prefUserList, { name: username, age: userAge, id: Math.random().toString() }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UserList users={usersList}></UserList>
    </div>
  );
}

export default App;
