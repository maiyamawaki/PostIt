import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import AllPostIItPage from "./pages/AllPostIItPage";
import RegisterPostIt from "./pages/RegisterPostIt";
import UpdatePostIt from "./pages/UpdatePostIt";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/postit"/>} />
        <Route path="/postit" element={<AllPostIItPage />} />
        <Route path="/postit/register" element={<RegisterPostIt />} />
        <Route path="/postit/:postId" element={<UpdatePostIt />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
