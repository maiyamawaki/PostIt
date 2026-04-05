import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import PostItList from "./pages/PostItList"
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/postit"/>} />
        <Route path="/postit" element={<PostItList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
