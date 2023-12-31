import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Login({Abrir}) {
  const navigate = useNavigate(); // Obtén la función de navegación
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("Error: Validación de Datos");
  const [showPassword, setShowPassword] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [passwordRequirements, setPasswordRequirements] = useState([]);

  const validateEmail = (inputEmail) => {
    if (inputEmail.includes('@')) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  };

 
  const validatePassword = (inputPassword) => {
    const hasUppercase = /[A-Z]/.test(inputPassword);
    const hasLowercase = /[a-z]/.test(inputPassword);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(inputPassword);
    const hasCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
   
    const requirements = [];
    if (inputPassword.length < 8) {
      requirements.push("8 caracteres");
    }
    if (!hasUppercase) {
      requirements.push("una letra mayúscula");
    }
    if (!hasLowercase) {
      requirements.push("una letra minúscula");
    }
    if (!hasSpecialChar) {
      requirements.push("un carácter especial");
    }

    setPasswordRequirements(requirements);

    if (inputPassword.length > 7 && hasUppercase && hasLowercase && hasSpecialChar && isValidEmail && hasCorreo) {
      setIsValidPassword(true);
      setMessage("Autorizado");
      alert("Autorizado");
    } else {
      setIsValidPassword(false);
      setMessage("Error de Acceso");
      //alert("Error de Acceso");
    }
  };

  const handleChangeEmail = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    validateEmail(inputEmail);
  };

  const handleChangePassword = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
    validatePassword(inputPassword);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  // const handleLogin = () => {
  //   if (isValidEmail && isValidPassword) {
  //     // Aquí podrías redirigir a otro componente o realizar alguna acción de autenticación
  //     alert("Login exitoso");
  //   } else {
  //     alert("Datos incorrectos");
  //   }
  // };


  const handleLogin = () => {
    if (isValidEmail && isValidPassword) {
        Abrir();
    } else {
        alert("Datos incorrectos");
    }
};

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <div className="col-lg-5 col-md-6">
        <div className="card shadow-sm p-4">
          <h6 className="mb-3">Ingrese el Correo Electrónico:</h6>
          <input
            type="email"
            className="form-control mb-2"
            value={email}
            onChange={handleChangeEmail}
          />
          <h6>Ingrese la Contraseña:</h6>
          <div className="input-group mb-2">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              value={password}
              onChange={handleChangePassword}
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
          {!isValidPassword && (
            <p className="text-danger mt-2">
              La contraseña debe tener al menos: {passwordRequirements.join(", ")}
            </p>
          )}
          <button
            className="btn btn-primary"
            onClick={handleLogin}
            disabled={!isValidEmail || !isValidPassword}
          >
            Iniciar Sesión
          </button>
          <h5 className="text-center mt-3">{message}</h5>
        </div>
      </div>
    </div>
  );
}

export default Login;
