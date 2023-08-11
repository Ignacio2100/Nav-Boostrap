import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Clientes = () => {
  const [nombre, setNombre] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [genero, setGenero] = useState("");
  const [identificacion, setIdentificacion] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [nombreEmpresa, setNombreEmpresa] = useState("");
  const [cargoEmpresa, setCargoEmpresa] = useState("");
  const [sitioWebEmpresa, setSitioWebEmpresa] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, como guardar los datos en una base de datos.
    // Luego puedes redirigir al usuario a otra página o mostrar un mensaje de éxito.
  };

  return (
    <div className="container mt-4  justify-content-center align-items-center" style={{ minHeight: '95vh' }}>
      <form  onSubmit={handleSubmit}>
        <div className="row ">
          <div className="col-md-6">
            <h4>Información Personal</h4>
            <div className="form-group mb-2">
              <label>Nombre completo</label>
              <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>
            <div className="form-group mb-2">
              <label>Fecha de nacimiento</label>
              <input type="date" className="form-control" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} />
            </div>
            <div className="form-group mb-2">
              <label>Género</label>
              <select className="form-control" value={genero} onChange={(e) => setGenero(e.target.value)}>
                <option value="">Seleccionar</option>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div className="form-group mb-2">
              <label>Número de Identificación</label>
              <input type="number" className="form-control" value={identificacion} onChange={(e) => setIdentificacion(e.target.value)} />
            </div>
          </div>
          <div className="col-md-6">
            <h4>Información de Contacto</h4>
            <div className="form-group mb-2">
              <label>Correo electrónico</label>
              <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group mb-2">
              <label>Número de teléfono</label>
              <input type="number" className="form-control" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
            </div>
            <div className="form-group mb-2">
              <label>Dirección</label>
              <input type="text" className="form-control" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
            </div>
          </div>
          <div className="col-md-12">
            <h4>Información de la Empresa</h4>
            <div className="form-group mb-2">
              <label>Nombre de la empresa</label>
              <input type="text" className="form-control" value={nombreEmpresa} onChange={(e) => setNombreEmpresa(e.target.value)} />
            </div>
            <div className="form-group mb-2">
              <label>Cargo en la empresa</label>
              <input type="text" className="form-control" value={cargoEmpresa} onChange={(e) => setCargoEmpresa(e.target.value)} />
            </div>
            <div className="form-group mb-2">
              <label>Sitio web de la empresa</label>
              <input type="text" className="form-control" value={sitioWebEmpresa} onChange={(e) => setSitioWebEmpresa(e.target.value)} />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary" onClick={() => alert("Cliente Exitoso")}>Guardar</button>
      </form>
    </div>
  );
}

export default Clientes;
