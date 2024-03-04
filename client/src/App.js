import React,{useEffect,useState}from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route,useLocation  } from 'react-router-dom'; // Import BrowserRouter
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import Nav from './pages/Home/Nav/Nav';
import Coding from './pages/Coding/Coding.jsx';
import Jobs from './pages/Jobs/Jobs';
import MentorDetails from './pages/Interview/MentorDetails';
import Interview from './pages/Interview/Interview';
import Loading from './pages/Loading/Loading';
import CourseContent from './pages/Courses/CourseContent';
import DSA from './pages/Coding/DSA';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for demonstration purposes
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      <Router>
        {isLoading && <Loading />} {/* Show loading spinner while loading */}
        {<Nav />} {/* Show nav if not on login or signup page */}
        {!isLoading && (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skill2040/login" element={<Login />} />
            <Route path="/skill2040/register" element={<Register />} />
            <Route path="/skill2040/home" element={<Home />} />
            <Route path="/skill2040/courses" element={<Courses />} />
            <Route path="/skill2040/coding" element={<Coding />} />
            <Route path="/skill2040/coding/DSATopics" element={<DSA />} />
            <Route path="/skill2040/coursecontent" element={<CourseContent />} />
            <Route path='/skill2040/jobs' element={<Jobs />} />
            <Route path='/skill2040/interview/mentordetails' element={<MentorDetails />} />
            <Route path='/skill2040/interview' element={<Interview />} />
          </Routes>
        )}
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;
