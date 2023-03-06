import './assets/css/tailwind.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import { Teach } from './pages/Teach';
import Course from './pages/Course';
import Courses from './pages/Courses';
import { TranslateContext } from './context/TranslateContext';
import PersonalSettings from './pages/PersonalSettings';
import CreateCourse from './components/CreateCourse';
import CourseCategories from './pages/CourseCategories';
import BecomeMentor from './pages/BecomeMentor';
import Dashboard from './pages/dashboard/Dashboard';
import MyCourse from './pages/dashboard/MyCourse';
import Students from './pages/dashboard/Students';
import Assignments from './pages/dashboard/Assignments';
import Videos from './pages/dashboard/Videos';
import DefaultLayout from './layouts/DefaultLayout';
import NoFooterLayout from './layouts/NoFooterLayout';
import NoNavbarLayout from './layouts/NoNavbarLayout';
import Student from './pages/dashboard/Student';
import CourseLayout from './layouts/CourseLayout';
import Assignment from './pages/dashboard/Assignment';

function App() {
  return (
    <div className="App">
      <TranslateContext>  
        <Routes>
          <Route element={<DefaultLayout />}> 
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Signup />} />
            <Route path='/mentor' element={<Teach />} />
            <Route path='/become-mentor' element={<BecomeMentor />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/courses/:id' element={<Course />} />
            <Route path='/courses/category/:category' element={<CourseCategories />} />
            <Route path='/settings' element={<PersonalSettings />} />
            <Route path='/courses/create' element={<CreateCourse />} />
          </Route>
          <Route element={<NoNavbarLayout />}>
            <Route path='/dashboard' element={<Dashboard /> } />
            <Route element={<CourseLayout />}>
              <Route path='/dashboard/courses/:id' element={<MyCourse /> } />
              <Route path='/dashboard/courses/:id/students' element={<Students /> } />
              <Route path='/dashboard/courses/:id/assignments' element={<Assignments /> } />
              <Route path='/dashboard/courses/:id/videos' element={<Videos /> } />
              <Route path='/dashboard/courses/:id/students/:id' element={<Student /> } />
              <Route path='/dashboard/courses/:id/assignments/:id' element={<Assignment /> } />
            </Route>
            
          </Route>
          <Route element={<NoFooterLayout />}>
            <Route path='/profile' element={<Profile />} />
          </Route>
        </Routes>
      </TranslateContext>
    </div>
  );
}

export default App;
