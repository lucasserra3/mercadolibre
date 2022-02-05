const Success = ({ onClick, exito, children }) => (
  <p onClick={onClick} className="success" exito={exito}>
    {children}
  </p>
);

export default Success;
