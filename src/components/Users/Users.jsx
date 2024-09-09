import { useLoaderData } from "react-router-dom";
import User from "../User/User";


const Users = () => {

  const users = useLoaderData();

  const usersStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px'
  }
  // state -- > data
  // use effect --> loader
  // fetch --> state set --> set state
  return (
    <div>
      <h2>All Users: {users.length}</h2>
      <p>Here are all users of the year</p>
      <div style={usersStyle}>
        {
          users.map(user => <User key={user.id} user={user}></User>)
        }
      </div>
    </div>
  );
};

export default Users;