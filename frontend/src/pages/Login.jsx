import "../styles/Login.css";

function Login() {
  return (
    <div className="loginContainer">
      <div className="loginImage">
        <h1>AsimetrikoZ</h1>
      </div>

      <div className="loginForm">
        <div className="loginWelcome">
          <h1>Bienvenido de nuevo</h1>
          <p>Introduce tus credenciales para acceder a tu panel.</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <h2>Correo electrónico</h2>
          <input type="email" placeholder="usuario@ejemplo.com" />
          <h2>Contraseña</h2>
          <input type="password" placeholder="••••••••" />
           <div className="loginActions">
            <label className="rememberMe">
              <input type="checkbox" />
              Recordar Cuenta
            </label>
            <span>
              <a href="#">¿Olvidaste tu contraseña?</a>
            </span>
          </div>
          <input type="button" value="Iniciar Sesión" />

          <div className="loginRegisterLink">
            <span>
              ¿No tienes una cuenta? <a href="Register">Regístrate ahora</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
