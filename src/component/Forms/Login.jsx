import { Link } from "react-router-dom";
import Button from "../Button/Button";
import InputType from "../InputType/InputType";
import { useContext } from "react";
import { ContextAPI } from "../../Context/contextAPI";

function Login() {
  const { setIsLogin } = useContext(ContextAPI);
  return (
    <div className="flex flex-col w-80 mt-3">
      <InputType type="text" placeholder="Email" />
      <InputType type="password" placeholder="Password" />
      <Button
        inputType="Login"
        className="bg-blue-500 rounded-lg text-white p-2 w-full hover:bg-blue-600"
        type="submit"
      />
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
  );
}

export default Login;
