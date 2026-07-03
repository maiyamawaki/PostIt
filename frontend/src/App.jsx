import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import AllPostItLabelPage from "./pages/AllPostItLabelPage";
import AllPostIItPage from "./pages/AllPostIItPage";
import AllDonePostItPage from "./pages/AllDonePostItPage";
import RegisterPostIt from "./pages/RegisterPostIt";
import UpdatePostIt from "./pages/UpdatePostIt";
import LoginPage from "./pages/LoginPage";
import RegisterUsrPage from "./pages/RegisterUsrPage";
import CategoryPage from "./pages/CategoryPage";
import './App.css';
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/label" element={<AllPostItLabelPage />} />
          <Route path="/auth/register" element={<RegisterUsrPage />} />
          <Route path="/postit/donePostIts" element={<AllDonePostItPage />} />
          <Route path="/postit/:labelId" element={<AllPostIItPage />} />
          <Route path="/postit/:labelId/register" element={<RegisterPostIt />} />
          <Route path="/postit/:labelId/:postId" element={<UpdatePostIt />} />
          <Route path="/category" element={<CategoryPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
