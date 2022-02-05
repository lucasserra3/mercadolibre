import Input from "./Input";
import React from "react";
import Button from "./Button";
import Filtros from "./Filtros";

function CrearProducto({ agregarProducto }) {
  const [Precio, setPrecio] = React.useState();
  const [Descripcion, setDescripcion] = React.useState();
  const [Contacto, setContacto] = React.useState();
  const [Imagen, setImagen] = React.useState();

  const agregarPrecio = (evento) => {
    setPrecio(evento.target.value);
  };
  const agregarDescripcion = (evento) => {
    setDescripcion(evento.target.value);
  };
  const agregarContacto = (evento) => {
    setContacto(evento.target.value);
  };
  const agregarImagen = (evento) => {
    setImagen(evento.target.value);
  };
  const crearProducto = () => {
    agregarProducto(Precio, Descripcion, Contacto, Imagen);
  };

  return (
    <div className="CrearProducto">
      <header className="CrearProducto-header">
        <Input label="Imagen" value={Imagen} onChange={agregarImagen}> </Input>
        <Input label="Precio" onChange={agregarPrecio} value={Precio} />
        <Input
          label="Descripcion"
          onChange={agregarDescripcion}
          value={Descripcion}
        />
        <Input label="Contacto" onChange={agregarContacto} value={Contacto} />
        <Button onClick={crearProducto} texto="Agregar Producto" />
      </header>
    </div>
  );
}

export default CrearProducto;
