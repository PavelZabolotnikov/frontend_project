import React, { useEffect, useState } from "react";
import UserItem from "./UserItem";
import { User } from "./types";

function PilotsPage(): JSX.Element  {
  const [users, setUsers] = useState<User[]>([]);




  useEffect(() => {
    fetch(
      `https://63dcbcce367aa5a7a400fe91.mockapi.io/RDS`
    )
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  console.log('response', users);
  

  return (

          <div className="MainPageContainer">
            {users.map((user) => (
              <UserItem user={user} />
            ))}
          </div>
  );
};

export default PilotsPage;
