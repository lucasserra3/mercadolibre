const Card = ({ children, selected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`card ${selected ? "card-selected" : ""}`}
    >
      {children}
    </div>
  );
};

export default Card;
