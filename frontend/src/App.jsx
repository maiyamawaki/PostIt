import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import AllPostIItPage from "./pages/AllPostIItPage";
import RegisterPostIt from "./pages/RegisterPostIt";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/postit"/>} />
        <Route path="/postit" element={<AllPostIItPage />} />
        <Route path="/add" element={<RegisterPostIt />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
