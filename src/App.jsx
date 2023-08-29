import { Route, Routes } from 'react-router-dom'
import Home from "./component/Home.jsx"
import Nav from "./component/Nav.jsx"
import Npage from "./component/page.jsx"
import Footer from './component/footer.jsx'


function App() {
  return (

    <>
      <Routes>
        <Route path='/' element={<Nav />} />
        <Route path='/home' element={<Home />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='*' element={<Npage />} />
      </Routes>
    </>
  )
}

export default App
