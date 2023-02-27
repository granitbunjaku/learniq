import './assets/css/tailwind.css';
import Home from './pages/Home';
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Teach } from './pages/Teach'
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/become-mentor' element={<Teach />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
