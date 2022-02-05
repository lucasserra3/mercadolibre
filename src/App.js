import "./App.css";
import Buscar from "./componentes/Buscar";
import Producto from "./componentes/Producto";
import React from "react";
import CrearProducto from "./componentes/CrearProducto";
import MisCryptos from "./componentes/MisCryptos";
import Buscador from "./componentes/Buscador";
import Filtros from "./componentes/Filtros";
import Editar from "./componentes/Editar";


function App() {
  const useLocalStorage = (key, value) =>{
  const [state, setState] = React.useState(
    window.localStorage.getItem(key) || value
  );
  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  },[state]);
  return [state, setState]
}
  const listaProductos = [
    { precio: 500, descripcion: "Gorra", contacto: 1141883146, link:"https://http2.mlstatic.com/gorra-nike-sb-icon-black-D_NQ_NP_950322-MLM26572905804_122017-F.jpg"},
    { precio: 1000, descripcion: "Bandera", contacto: 1167867765, link:"https://image.freepik.com/foto-gratis/bandera-argentina-contra-cielo-nublado-blanco_88135-18110.jpg" },
    { precio: 700, descripcion: "Botines", contacto: 1141887689, link:"https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwff20d94b/products/NI_AT7946-414/NI_AT7946-414-1.JPG" },
  ];
  const listaJugadores = [
    { edad: 17, nombre: "Lucas", contacto: 1141883146 },
    { edad: 22, nombre: "Nico", contacto: 1167867765 },
    { edad: 20, nombre: "Alex", contacto: 1141887689 },
  ];
  const [selectIndex, setSelectIndex] = React.useState();
  function seleccionar(index) {
    setSelectIndex(index);
  }
  const [listaDeProductosAgregados, setListaDeProductosAgregados] = useLocalStorage("Productos", listaProductos)
  const [listaDeProductos, setlistaDeProductos] = React.useState(listaProductos)
  function agregarProducto(precio, descripcion, contacto, link) {
    const newLista = [...listaDeProductos];
    newLista.push({ precio, descripcion, contacto, link });
    setlistaDeProductos(newLista);
    setListaDeProductosAgregados(listaDeProductos)
  }

  function borrarProducto(index) {
    const newLista = [...listaDeProductos];
    newLista.splice(index, 1);
    setlistaDeProductos(newLista);
  }

  const crypto = [{ number: 5000 }];
  const [listaDeCrypto, setlistaDeCrypto] = React.useState(crypto);
  const onCompra = (precio) => {
    const billeteraUno = listaDeCrypto[0];
    if (billeteraUno.number < precio) {
      return;
    }
    billeteraUno.number = billeteraUno.number - precio;
    const nuevasBilleteras = [...listaDeCrypto];
    nuevasBilleteras[0] = billeteraUno;
    setlistaDeCrypto(nuevasBilleteras);
  };
  function editarProducto(producto) {
    const newLista = [...listaDeProductos];
    newLista[selectIndex] = producto;
    setlistaDeProductos(newLista);
  }
 
  return (
    <>
      <div className="App">
        <div className="cabeza">
          <div className="mercadoBarrani" />
          <Buscador value="auto" />
          <Buscar />
          {listaDeCrypto.map(({ number }, index) => (
            <MisCryptos index={index} number={number} />
          ))}
          <Filtros></Filtros>
        </div>
        <CrearProducto agregarProducto={agregarProducto} />
        {listaDeProductos.map(({ precio, descripcion, contacto, link }, index) => (
          <Producto
            precio={precio}
            descripcion={descripcion}
            contacto={contacto}
            link={link}
            index={index}
            onCompra={onCompra}
            selected={selectIndex === index}
            onClick={() => seleccionar(index)}
            borrarProducto={() => borrarProducto(index)}
          />
        ))}
        <Editar
          producto={listaDeProductos.find(
            (item, index) => index === selectIndex
          )}
          editarProducto={editarProducto}
        />
        
      </div>
    </>
  );
}

export default App;
