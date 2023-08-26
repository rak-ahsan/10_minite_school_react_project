import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from "./component/Home.jsx"
import Nav from "./component/Nav.jsx"


function App() {
  return (
    <Routes>
        <Route path='/' element={<Nav />} />
        <Route path='/home' element={<Home />} />
    </Routes>
  )
}

export default App
