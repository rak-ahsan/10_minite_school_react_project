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
import Studen from './pages/backend/studen.jsx'
import Job from './pages/backend/job.jsx'




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
        <Route path='/studen' element={<Studen />} />
        <Route path='/job' element={<Job />} />
        <Route path='*' element={<Npage />} />
      </Routes>
  )
}

export default App
