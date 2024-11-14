
// import React from 'react'
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';

const routes = (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      </Routes>
  </Router>
);
const App = () => {
  return (
    <div>
      {routes}
    </div>
  )
}

export default App