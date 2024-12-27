function Button({ type = "text", inputType, className, onClickHandler }) {
  return (
    <>
      <button type={type} className={className} onClick={onClickHandler}>
        {inputType}
      </button>
    </>
  );
}

export default Button;
