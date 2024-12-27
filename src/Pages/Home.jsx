import { useContext } from "react";
import "../css/Home.css";
import Register from "../component/Forms/Register";
import Login from "../component/Forms/Login";
import { ContextAPI } from "../Context/contextAPI";

function Home() {
  const { isLogin, setIsLogin } = useContext(ContextAPI);

  const handleToggle = (isLogin) => {
    setIsLogin(isLogin);
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white px-10 py-10 rounded-lg shadow-lg flex flex-col items-center justify-center">
        <h1>Welcome to Microdeft Courses</h1>
        <h1 className="text-3xl mb-6 text-gray-600">
          {isLogin ? "Register Form" : "Login Form"}
        </h1>
        <div className="toggle-container">
          <button
            className={`toggle-label ${isLogin ? "active" : ""}`}
            onClick={() => handleToggle(true)}
          >
            Register
          </button>
          <button
            className={`toggle-label ${!isLogin ? "active" : ""}`}
            onClick={() => handleToggle(false)}
          >
            Login
          </button>
        </div>
        <div>{isLogin ? <Register /> : <Login />}</div>
      </div>
    </div>
  );
}

export default Home;
