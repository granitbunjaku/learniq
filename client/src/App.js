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
import { TranslateContext } from './context/TranslateContext';

function App() {

  return (
    <div className="App">
      <TranslateContext>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/teach' element={<Teach />} />
          <Route path='/courses/:id' element={<Course />} />
          <Route path='/category/:category' element={<Categories />} />
        </Routes>
      </TranslateContext>
      <Footer />
    </div>
  );
}

export default App;
