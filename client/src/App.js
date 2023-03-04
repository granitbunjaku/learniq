import './assets/css/tailwind.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import { Teach } from './pages/Teach';
import { Categories } from './pages/Categories';
import Course from './pages/Course';
import { TranslateContext } from './context/TranslateContext';
import PersonalSettings from './pages/PersonalSettings';
import CreateCourse from './components/CreateCourse';

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
          <Route path='/profile' element={<Profile />} />
          <Route path='/settings' element={<PersonalSettings />} />
          <Route path='/courses/create' element={<CreateCourse />} />
        </Routes>
      </TranslateContext>
      <Footer />
    </div>
  );
}

export default App;
