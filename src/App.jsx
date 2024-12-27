import { useState } from "react";
import "./App.css";
import { ContextAPI } from "./Context/contextAPI";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Course from "./Pages/Courses";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <ContextAPI.Provider value={{ isLogin, setIsLogin }}>
        <div className="background">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Course />} />
          </Routes>
        </div>
      </ContextAPI.Provider>
    </>
  );
}

export default App;
