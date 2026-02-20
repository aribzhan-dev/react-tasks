import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Project Dashboard</h1>
      <p>This is a React application built with Hooks and Router.</p>
      <Link to="/list">
        <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
          View Users List
        </button>
      </Link>
    </div>
  );
};

export default Home;