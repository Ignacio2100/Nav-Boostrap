import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Calculo() {
  const [sueldo, setSueldo] = useState(0);
  const [aumento, setAumento] = useState(0);
  const [descuento, setDescuento] = useState(0);

  const handleSueldoChange = (event) => {
    setSueldo(parseFloat(event.target.value));
  };

  const handleAumentoChange = (event) => {
    setAumento(parseFloat(event.target.value));
  };

  const handleDescuentoChange = (event) => {
    setDescuento(parseFloat(event.target.value));
  };

  const calcularIGSS = () => {
    return sueldo * 0.0483;
  };

  const calcularTotalAPagar = () => {
    const igss = calcularIGSS();
    return sueldo + aumento - descuento - igss;
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="col-lg-4 col-md-6">
        <div className="card p-4 shadow-sm">
          <h4 className="mb-4 text-center">Cálculo de Sueldo</h4>
          <div className="mb-3">
            <h5>Ingrese El Sueldo:</h5>
            <input
              type="number"
              className="form-control"
              value={sueldo}
              onChange={handleSueldoChange}
            />
          </div>
          <div className="mb-3">
            <h5>Ingrese El Aumento Salarial:</h5>
            <input
              type="number"
              className="form-control"
              value={aumento}
              onChange={handleAumentoChange}
            />
          </div>
          <div className="mb-4">
            <h5>Ingrese El Descuento Variable:</h5>
            <input
              type="number"
              className="form-control"
              value={descuento}
              onChange={handleDescuentoChange}
            />
          </div>
          <div className="text-center">
            <h5>Resultados:</h5>
            <h6>IGSS (4.83%): {calcularIGSS()}</h6>
            <h6>Total a Pagar: {calcularTotalAPagar()}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculo;
