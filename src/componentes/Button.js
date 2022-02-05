const Button = ({ texto, onClick, selected }) => (
  <button
    onClick={onClick}
    className={`Button ${selected ? "Button-selected" : ""}`}
  >
    {texto}
  </button>
);

export default Button;
