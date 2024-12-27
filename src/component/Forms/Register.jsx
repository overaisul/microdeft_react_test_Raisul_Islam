import { useContext, useState } from "react";
import Button from "../Button/Button";
import InputType from "../InputType/InputType";
import { ContextAPI } from "../../Context/contextAPI";
import { Link } from "react-router-dom";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setIsLogin } = useContext(ContextAPI);

  const handleToggle = () => {
    alert("User Registered Successfully");
    setIsLogin(false);
  };

  function handleSubmit(e) {
    e.preventDefault();

    const register = { name, email, password };

    console.log(register);

    fetch("https://react-interview.crd4lc.easypanel.host/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(register),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("New User Added:", data);
      })
      .catch((err) => {
        console.error("Error:", err.message);
      });
  }

  return (
    <>
      {" "}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col w-80 mt-3">
          <InputType
            type="text"
            placeholder="Full Name"
            changeHandler={(e) => setName(e.target.value)}
          />
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
            inputType="Register"
            className="bg-blue-500 rounded-lg text-white p-2 w-full hover:bg-blue-600"
            type="submit"
            onClickHandler={handleToggle}
          />
          <p className="mt-2 text-center">
            Already Have an Account?{" "}
            <Link
              to="/"
              onClick={() => {
                setIsLogin(false);
              }}
              className="text-blue-500"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}

export default Register;
