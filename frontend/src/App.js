import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import Signin from './pages/Signin'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signin />} />
      </Routes>
    </>
  );
}

export default App;
