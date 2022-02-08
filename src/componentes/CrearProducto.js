import Input from "./Input";
import React from "react";
import Button from "./Button";

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

  const addProducto = (e) => {
    console.log("agregando producto");
    e.preventDefault();
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="App">
      <header className="CrearProducto-header">
        <form onSubmit={addProducto}>
          <Input
            name="imagen"
            label="Imagen"
            value={Imagen}
            onChange={agregarImagen}
            onChange={handleChange}
          >
            {" "}
          </Input>
          <Input
            name="precio"
            label="Precio"
            onChange={agregarPrecio}
            value={Precio}
            onChange={handleChange}
          />
          <Input
            name="descripcion"
            label="Descripcion"
            onChange={agregarDescripcion}
            value={Descripcion}
            onChange={handleChange}
          />
          <Input
            name="contacto"
            label="Contacto"
            onChange={agregarContacto}
            value={Contacto}
            onChange={handleChange}
          />
          <Button onClick={crearProducto} texto="Agregar Producto" />
        </form>
      </header>
    </div>
  );
}

export default CrearProducto;
