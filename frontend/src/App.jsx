import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import PostItLiist from "./components/PostItLiist"
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/postit"/>} />
        <Route path="/postit" element={<PostItLiist />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
