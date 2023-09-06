import { Route, Routes } from 'react-router-dom'
import Home from "./component/Home.jsx"
import Nav from "./component/Nav.jsx"
import Header from "./component/he.jsx"
import Npage from "./component/page.jsx"
import Footer from './component/footer.jsx'
import Hsc from './pages/hsc.jsx'
import Hscbatch from './pages/hscbatch.jsx'
import Sidebar from './pages/backend/sidebar.jsx'
import Dashboard from './pages/backend/dashboard.jsx'
import Login from './pages/login.jsx'
import Addteacher from './pages/backend/addteacher.jsx'
import Viewteacher from './pages/backend/viewteacher.jsx'
import Editteaacher from './pages/backend/Editteaacher.jsx'
import Addstudent from './pages/backend/student/addstudent.jsx'
import Viewstudent from './pages/backend/student/viewstudent.jsx'
import Editstudent from './pages/backend/student/Editstudent.jsx'
import Course from './pages/backend/courses/course.jsx'
import Viewcourse from './pages/backend/courses/viewcourse.jsx'









function App() {
  return (
    <Routes>
      <Route path='/' element={<Nav />} />
      <Route path='/home' element={<Home />} />
      <Route path='/footer' element={<Footer />} />
      <Route path='/hsc' element={<Hsc />} />
      <Route path='/nine' element={<Hsc />} />
      <Route path='/ten' element={<Hsc />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/Hscbatch' element={<Hscbatch />} />
      <Route path='/Sidebar' element={<Sidebar />} />
      <Route path='*' element={<Npage />} />

      {/* for backend */}
      <Route path='/addteacher' element={<Addteacher />} />
      <Route path='/viewteacher' element={<Viewteacher />} />
      <Route path='/teacher/:id/edit' element={<Editteaacher />} />

      {/* for student */}
      <Route path='/student' element={<Addstudent />} />
      <Route path='/viewstudent' element={<Viewstudent />} />
      <Route path='/editstudent/:id' element={<Editstudent />} />

      {/* for course */}
      <Route path='/courseadd' element={<Course />} />
      <Route path='/viewcourse' element={<Viewcourse />} />
    </Routes>
  )
}

export default App
