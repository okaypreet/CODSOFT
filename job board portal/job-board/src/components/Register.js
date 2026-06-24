function Register() {
  return (
    <div className="auth-container">
      <div className="auth-card register-card">
        <h2>Create Account</h2>

        <input placeholder="Full Name" />

        <input placeholder="Email" />

        <input
          placeholder="Password"
          type="password"
        />

        <button className="register-btn">
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;