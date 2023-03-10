import { useState, useEffect } from 'react';
import './assets/css/tailwind.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Route, Routes } from 'react-router-dom';
import { Teach } from './pages/Teach';
import Course from './pages/Course';
import Courses from './pages/Courses';
import { TranslateContext } from './context/TranslateContext';
import PersonalSettings from './pages/PersonalSettings';
import CreateCourse from './pages/CreateCourse';
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
import { QueryClient, QueryClientProvider} from 'react-query';
import { UserContext } from './context/UserContext';
import PrivateRoutes from './pages/PrivateRoutes';
const queryClient = new QueryClient();


function App() {
  const [ user, setUser ] = useState(null);

  useEffect(() => {

    if(localStorage.getItem('user') && localStorage.getItem('user') !== "undefined") {
      const _user = JSON.parse(localStorage.getItem('user'))

      setUser({
          "token": _user.token,
          "email": _user.email,
          "id": _user.id
      })
    }
  }, [])

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <UserContext.Provider value={{user, setUser}}>
          <TranslateContext>  
              <Routes>
                <Route element={<DefaultLayout />}> 
                  <Route path='/' element={<Home />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/register' element={<Signup />} />
                  <Route path='/mentor' element={<Teach />} />
                  <Route path='/courses' element={<Courses />} />
                  <Route path='/courses/:id' element={<Course />} />
                  <Route path='/courses/category/:category' element={<CourseCategories />} />

                  <Route element={<PrivateRoutes />}>
                    <Route path='/become-mentor' element={<BecomeMentor />} />
                    <Route path='/settings' element={<PersonalSettings />} />
                    <Route path='/courses/create' element={<CreateCourse />} />
                  </Route>
                  
                </Route>
                  <Route element={<NoNavbarLayout />}>
                      <Route element={<CourseLayout />}>
                        <Route element={<PrivateRoutes />}>
                        <Route path='/dashboard' element={<Dashboard /> } />
                        <Route path='/dashboard/courses/:id' element={<MyCourse /> } />
                        <Route path='/dashboard/courses/:id/students' element={<Students /> } />
                        <Route path='/dashboard/courses/:id/assignments' element={<Assignments /> } />
                        <Route path='/dashboard/courses/:id/videos' element={<Videos /> } />
                        <Route path='/dashboard/courses/:id/students/:id' element={<Student /> } />
                        <Route path='/dashboard/courses/:id/assignments/:id' element={<Assignment /> } />
                      </Route>
                    </Route>
                  </Route> 
                
                {/*Profile */}
                <Route element={<PrivateRoutes />}>
                  <Route element={<NoFooterLayout />}>
                      <Route path='/profile/:id' element={<Profile />} />
                  </Route>
                </Route>
              </Routes>
          </TranslateContext>
        </UserContext.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
