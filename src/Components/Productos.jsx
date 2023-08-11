import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Productos = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [sku, setSku] = useState("");
  const [precio, setPrecio] = useState("");
  const [precioVenta, setPrecioVenta] = useState("");
  const [peso, setPeso] = useState("");
  const [color, setColor] = useState("");
  const [material, setMaterial] = useState("");
  const [instrucciones, setInstrucciones] = useState("");
  const [cantidadStock, setCantidadStock] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, como guardar los datos en una base de datos.
    // Luego puedes redirigir al usuario a otra página o mostrar un mensaje de éxito.
    alert("Producto exitoso");
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Registro de Productos</h3>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Nombre del producto</label>
              <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Descripción del producto</label>
              <textarea className="form-control" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Categoría del producto</label>
              <input type="text" className="form-control" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
            </div>
            <div className="form-group">
              <label>SKU del producto</label>
              <input type="text" className="form-control" value={sku} onChange={(e) => setSku(e.target.value)} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Precio del producto</label>
              <input type="number" step="0.01" className="form-control" value={precio} onChange={(e) => setPrecio(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Precio de venta</label>
              <input type="number" step="0.01" className="form-control" value={precioVenta} onChange={(e) => setPrecioVenta(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Peso del producto</label>
              <input type="number" step="0.01" className="form-control" value={peso} onChange={(e) => setPeso(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Color del producto</label>
              <input type="text" className="form-control" value={color} onChange={(e) => setColor(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Material o composición</label>
              <input type="text" className="form-control" value={material} onChange={(e) => setMaterial(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Instrucciones de uso</label>
              <textarea className="form-control" value={instrucciones} onChange={(e) => setInstrucciones(e.target.value)} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Cantidad disponible en stock</label>
              <input type="number" className="form-control" value={cantidadStock} onChange={(e) => setCantidadStock(e.target.value)} />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Guardar</button>
      </form>
    </div>
  );
}

export default Productos;
