
const User = ({user}) => {
  const {id, name, email, phone} = user;

  const userStyle = {
    border: '2px solid green',
    padding: '10px',
    borderRadius: '20px'
  }

  return (
    <div style={userStyle}>
      <h3>{name}</h3>
      <p>email: {email}</p>
      <p>phone: {phone}</p>
    </div>
  );
};

export default User;