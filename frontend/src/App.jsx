import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import AllPostIItPage from "./pages/AllPostIItPage";
import RegisterPostIt from "./pages/RegisterPostIt";
import UpdatePostIt from "./pages/UpdatePostIt";
import LoginPage from "./pages/LoginPage";
import RegisterUsrPage from "./pages/RegisterUsrPage";
import './App.css';
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterUsrPage />} />
          <Route path="/postit" element={<AllPostIItPage />} />
          <Route path="/postit/register" element={<RegisterPostIt />} />
          <Route path="/postit/:postId" element={<UpdatePostIt />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  )
}

export default App
