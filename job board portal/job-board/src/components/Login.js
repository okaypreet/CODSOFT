function Login() {
  return (
    <div className="auth-container">
      <div className="auth-card login-card">
        <h2>Login</h2>

        <input placeholder="Email" />

        <input
          placeholder="Password"
          type="password"
        />

        <button className="login-btn">
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;