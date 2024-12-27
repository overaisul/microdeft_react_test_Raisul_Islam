function InputType({ type, placeholder = "", changeHandler }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={changeHandler}
      className="border-2 border-gray-200 p-3 rounded mb-2"
      required
    />
  );
}

export default InputType;
