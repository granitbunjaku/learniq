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
import { TranslateContext } from './context/TranslateContext';
import CourseCategories from './pages/CourseCategories';
import BecomeMentor from './pages/BecomeMentor';

function App() {
  return (
    <div className="App">
      <TranslateContext>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/mentor' element={<Teach />} />
          <Route path='/become-mentor' element={<BecomeMentor />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/courses/:id' element={<Course />} />
          <Route path='/courses/category/:category' element={<CourseCategories />} />
        </Routes>
      </TranslateContext>
      <Footer />
    </div>
  );
}

export default App;
