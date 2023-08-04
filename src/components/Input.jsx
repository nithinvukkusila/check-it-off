const Input = ({ type = "text", onChange, name, value, placeholder }) => {
  return (
    <div className="input-field">
      <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};
export default Input;
