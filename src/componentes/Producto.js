import Card from "./Card";
import React from "react";
import Comprar from "./Comprar";
import Success from "./Success";
import Imagen from "./Imagen";
import Button from "./Button";

const Producto = ({
  precio,
  descripcion,
  contacto,
  link,
  onCompra,
  onClick,
  selected,
  borrarProducto,
}) => {
  const [Procedio, setProcedio] = React.useState(false);
  function procedio() {
    setProcedio(!Procedio);
    onCompra(precio);
  }
  const texto2 = `${Procedio ? "Success" : ""}`;
  return (
    <Card onClick={onClick} selected={selected}>
      <Imagen link={link}></Imagen>
      <h2>{precio}</h2>
      <h3>{descripcion}</h3>
      <h4>{contacto}</h4>
      <Button onClick={borrarProducto} texto="Borrar"/>

      <Comprar onClick={procedio} texto="Comprar" />
      <Success exito={procedio}>{texto2}</Success>
    </Card>
  );
};

export default Producto;
