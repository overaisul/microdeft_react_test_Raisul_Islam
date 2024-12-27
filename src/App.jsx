import { useState } from "react";
import "./App.css";
import { ContextAPI } from "./Context/contextAPI";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <ContextAPI.Provider value={{ isLogin, setIsLogin }}>
        <div className="background">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </ContextAPI.Provider>
    </>
  );
}

export default App;
