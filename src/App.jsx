import { useState } from "react";
import "./App.css";
import { ContextAPI } from "./Context/contextAPI";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Course from "./Pages/Courses";
import AddCourse from "./Pages/AddCourse";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <ContextAPI.Provider value={{ isLogin, setIsLogin }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddCourse" element={<AddCourse />} />
          <Route path="/courses" element={<Course />} />
        </Routes>
      </ContextAPI.Provider>
    </>
  );
}

export default App;
