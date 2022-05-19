import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register/register";
import Login from "./Pages/Login/login";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
