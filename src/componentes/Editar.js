import Input from "./Input";
import React from "react";

function EditarProducto({ editarProducto, producto }) {
  const [precio, setPrecio] = React.useState();
  const [descripcion, setDescripcion] = React.useState();
  const [contacto, setContacto] = React.useState();

  React.useEffect(() => {
    if (producto) {
      setPrecio(producto.precio);
      setDescripcion(producto.descripcion);
      setContacto(producto.contacto);
    }
  }, [producto]);

  const cambiarprecio = (evento) => {
    setPrecio(evento.target.value);
    const newProducto = { precio: evento.target.value, contacto, descripcion };
    editarProducto(newProducto);
  };
  const cambiardescripcion = (evento) => {
    setDescripcion(evento.target.value);
    const newProducto = { descripcion: evento.target.value, contacto, precio };
    editarProducto(newProducto);
  };
  const cambiarcontacto = (evento) => {
    setContacto(evento.target.value);
    const newProducto = { contacto: evento.target.value, precio, descripcion };
    editarProducto(newProducto);
  };

  return (
    <div className="EditarProducto">
      <header className="EditarProducto-header">
        <h2>Editar Producto</h2>
        <Input label="Precio" onChange={cambiarprecio} value={precio} />
        <Input
          label="Descripcion"
          onChange={cambiardescripcion}
          value={descripcion}
        />
        <Input label="Contacto" onChange={cambiarcontacto} value={contacto} />
      </header>
    </div>
  );
}

export default EditarProducto;
