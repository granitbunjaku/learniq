import './assets/css/tailwind.css';
import Home from './pages/Home';
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import { Teach } from './pages/Teach';
import { Categories } from './pages/Categories';
import Course from './pages/Course';
import Courses from './pages/Courses';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/become-mentor' element={<Teach />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/teach' element={<Teach />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:id' element={<Course />} />
        <Route path='/category/:category' element={<Categories />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
