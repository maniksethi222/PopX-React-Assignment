import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [agency, setAgency] = useState("");

  const handleCreateAccount = () => {
    const userData = {
      fullName,
      phone,
      email,
      password,
      company,
      agency,
    };

    localStorage.setItem("user", JSON.stringify(userData));

    navigate("/account");
  };

  return (
    <div className="container">
      <div style={{ padding: "20px" }}>
        <h1>Create your PopX account</h1>

        <input
          className="input"
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          className="input"
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          className="input"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          className="input"
          type="text"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <div style={{ marginTop: "20px" }}>
          <p>Are you an Agency?</p>

          <label>
            <input
              type="radio"
              name="agency"
              value="Yes"
              onChange={(e) => setAgency(e.target.value)}
            />
            Yes
          </label>

          <label style={{ marginLeft: "20px" }}>
            <input
              type="radio"
              name="agency"
              value="No"
              onChange={(e) => setAgency(e.target.value)}
            />
            No
          </label>
        </div>

        <button
          className="primary-btn"
          style={{ marginTop: "30px" }}
          onClick={handleCreateAccount}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Register;