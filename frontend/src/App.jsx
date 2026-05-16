import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registro from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="Home" element={<Home />} />
      <Route path="/Register" element={<Registro />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
}

export default App;
