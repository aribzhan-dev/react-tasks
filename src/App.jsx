import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UserList from './pages/UserList';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<UserList />} />
      </Routes>
    </>
  );
}

export default App;