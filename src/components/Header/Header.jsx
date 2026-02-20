import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav style={{ padding: '1rem', background: '#f4f4f4', display: 'flex', gap: '20px' }}>
      <Link to="/">Home</Link>
      <Link to="/list">Users List</Link>
    </nav>
  );
};

export default Header;