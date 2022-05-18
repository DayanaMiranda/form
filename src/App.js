import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register/register";
import Login from "./Login/login";

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
