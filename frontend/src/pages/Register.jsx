import { useState } from "react";
import "../styles/Register.css";
import { Link } from "react-router-dom";

function Register() {
  const [role, setRole] = useState("trainer"); // Estado para el selector de rol

  return (
    <div className="registerContainer">
      {/* SECCIÓN IZQUIERDA: IMAGEN Y BRANDING */}
      <div className="registerImage">
        <div className="overlay"></div>
        <div className="brandContent">
          <h1>AsimetrikoZ</h1>
          <div className="mainMotto">
            <h2>
              COMIENZA AQUÍ <br /> RENDIMIENTO <br /> DE ELITE
            </h2>
          </div>
        </div>
      </div>

      {/* SECCIÓN DERECHA: FORMULARIO */}
      <div className="registerForm">
        <div className="registerWelcome">
          <h1>Crear una cuenta</h1>
          <p>Únete a la plataforma líder para profesionales del fitness.</p>
        </div>

        {/* BOTONES SOCIALES */}
        <div className="socialActions">
          <button className="socialBtn">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
            />
            Google
          </button>
          <button className="socialBtn">
            <span>icono de manzana (si tuviera uno)</span> Apple
          </button>
        </div>

        <div className="divider">
          <span>O REGÍSTRATE CON EMAIL</span>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <h2>Nombre Completo</h2>
          <input type="text" placeholder="John Smith" />

          <h2>Correo electrónico</h2>
          <input type="email" placeholder="JohnSmith35@gmail.com" />

          <h2>Rol</h2>
          <div className="roleSelector">
            <div
              className={`roleOption ${role === "trainer" ? "active" : ""}`}
              onClick={() => setRole("trainer")}
            >
              <i className="icon">🏋️‍♂️</i>
              <span>Entranador</span>
            </div>
            <div
              className={`roleOption ${role === "atleta" ? "active" : ""}`}
              onClick={() => setRole("atleta")}
            >
              <i className="icon">🏃‍♂️</i>
              <span>iniciante</span>
            </div>
          </div>

          <h2>Contraseña</h2>
          <input type="password" placeholder="••••••••" />

          <div className="termsActions">
            <label className="rememberMe">
              <input type="checkbox" />
              Acepto los<span>Términos y Privacidad</span> de AsimetrikoZ.
            </label>
          </div>

          <input type="button" className="submitBtn" value="Registrarse" />

          <div className="registerRegisterLink">
            <span>
              ¿Ya tienes una cuenta? <Link to="/Login">Inicia sesión</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
