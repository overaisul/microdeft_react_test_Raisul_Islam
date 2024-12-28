import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import InputType from "../InputType/InputType";
import { useContext, useState } from "react";
import { ContextAPI } from "../../Context/contextAPI";

function Login() {
  const { setIsLogin } = useContext(ContextAPI);

  const navigator = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const register = { email, password };

    console.log(register);

    fetch("https://react-interview.crd4lc.easypanel.host/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(register),
    })
      .then((response) => {
        if (!response.ok) {
          setError("Invalid Email or Password");
          throw new Error("Invalid Credentials");
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("authToken", data.data.token);
        localStorage.setItem("user", JSON.stringify(data.data.user));
        alert("Login Successful");
        navigator("/Courses");
        console.log("login Successful", data);
      })
      .catch((err) => {
        setError("Invalid Email or Password");
        console.error("Error:", err.message);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col w-80 mt-3">
        <InputType
          type="email"
          placeholder="Email"
          changeHandler={(e) => setEmail(e.target.value)}
        />
        <InputType
          type="password"
          placeholder="Password"
          changeHandler={(e) => setPassword(e.target.value)}
        />
        <Button
          inputType="Login"
          className="bg-blue-500 rounded-lg text-white p-2 w-full hover:bg-blue-600"
          type="submit"
        />
        {error && <p className="text-red-500 text-center">{error}</p>}
        <p className="mt-2 text-center">
          Need a New Account?{" "}
          <Link
            to="/"
            onClick={() => {
              setIsLogin(true);
            }}
            className="text-blue-500"
          >
            Register
          </Link>
        </p>
      </div>
    </form>
  );
}

export default Login;
