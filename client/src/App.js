import './assets/css/tailwind.css';
import Home from './pages/Home';
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import { Teach } from './pages/Teach';
import Course from './pages/Course';
import Courses from './pages/Courses';
import { TranslateContext } from './context/TranslateContext';
import CourseCategories from './pages/CourseCategories';
import BecomeMentor from './pages/BecomeMentor';
import Dashboard from './pages/dashboard/Dashboard';
import MyCourse from './pages/dashboard/MyCourse';
import Students from './pages/dashboard/Students';
import Assignments from './pages/dashboard/Assignments';
import Videos from './pages/dashboard/Videos';

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

          {/* DASHBOARD */}
          <Route path='/dashboard' element={<Dashboard /> } />
          <Route path='/dashboard/courses/:id' element={<MyCourse /> } />
          <Route path='/dashboard/courses/:id/students' element={<Students /> } />
          <Route path='/dashboard/courses/:id/assignments' element={<Assignments /> } />
          <Route path='/dashboard/courses/:id/videos' element={<Videos /> } />
        </Routes>
      </TranslateContext>
      <Footer />
    </div>
  );
}

export default App;
