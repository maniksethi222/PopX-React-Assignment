import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div style={{ padding: "20px" }}>
        <h1>Signin to your PopX account</h1>

        <p>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit.
        </p>

        <input
          type="email"
          placeholder="Enter email address"
          className="input"
        />

        <input
          type="password"
          placeholder="Enter password"
          className="input"
        />

        <button
          className="login-btn"
          onClick={() => navigate("/account")}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;