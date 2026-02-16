import { Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register"
import Home from "./components/Home"
import About from "./components/About"
import Tasks from "./components/Tasks"
import Profile from "./components/Profile"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {


  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route 
          path="/tasks" 
          element={
            <ProtectedRoute>
                <Tasks />
            </ProtectedRoute>
          } />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
