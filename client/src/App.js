import './assets/css/tailwind.css';
import Home from './pages/Home';
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Route, Routes } from 'react-router-dom';
import { Teach } from './pages/Teach';
import { Categories } from './pages/Categories';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/teach' element={<Teach />} />
        <Route path='/category/:category' element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
