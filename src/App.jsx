import { Route, Routes } from 'react-router-dom'
import Home from "./component/Home.jsx"
import Nav from "./component/Nav.jsx"
import Npage from "./component/page.jsx"
import Footer from './component/footer.jsx'
import Hsc from './pages/hsc.jsx'
import Hscbatch from './pages/hscbatch.jsx'


function App() {
  return (

    <>
      <Routes>
        <Route path='/' element={<Nav />} />
        <Route path='/home' element={<Home />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/hsc' element={<Hsc />} />
        <Route path='/nine' element={<Hsc />} />
        <Route path='/ten' element={<Hsc />} />
        <Route path='/Hscbatch' element={<Hscbatch />} />
        <Route path='*' element={<Npage />} />
      </Routes>
    </>
  )
}

export default App
