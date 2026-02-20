import { useState, useEffect } from 'react';
import { usersData } from '../usersData';
import UserCard from '../components/UserCard/UserCard';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setUsers(usersData);
      setLoading(false);
    }, 800); 
    return () => clearTimeout(timer);
  }, []);

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 500);
  };

  if (loading) return <h2 style={{ padding: '20px' }}>Loading data...</h2>;

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Available Users</h2>
        <button onClick={handleRefresh}>Refresh List</button>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
        {users.map((user) => (
          <UserCard key={user.id} name={user.name} role={user.role} />
        ))}
      </div>
    </div>
  );
};

export default UserList;