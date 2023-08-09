import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("Error: Validación de Datos");
  const [showPassword, setShowPassword] = useState(false);

  const validatePassword = (inputPassword) => {
    if (inputPassword.length > 5) {
      setMessage("Autorizado");
    } else {
      setMessage("Error: Validación de Datos");
    }
  };

  const handleChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
    validatePassword(inputPassword);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="col-lg-4 col-md-6">
        <div className="card shadow-sm p-3">
          <h5 className="mb-4">Ingrese la Contraseña:</h5>
          <div className="input-group mb-3">
            <input
              type={showPassword ? "number" : "password"}
              className="form-control"
              value={password}
              onChange={handleChange}
            />
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={handleTogglePassword}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>
          <h5 className="text-center">{message}</h5>
        </div>
      </div>
    </div>
  )
}

export default Login;
