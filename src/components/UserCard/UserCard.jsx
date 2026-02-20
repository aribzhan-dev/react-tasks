const UserCard = ({ name, role }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px', borderRadius: '8px' }}>
      <h3>{name}</h3>
      <p>Position: {role}</p>
    </div>
  );
};

export default UserCard;