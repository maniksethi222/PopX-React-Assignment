import { useEffect, useState } from "react";

function Account() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <div className="container">
      <div style={{ background: "white", padding: "20px" }}>
        <h3>Account Settings</h3>
      </div>

      <div
        style={{
          padding: "20px",
          background: "#f7f8f9",
          borderTop: "1px solid #ddd",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
            }}
          />

          <div>
            <h4>{user.fullName || "User Name"}</h4>
            <p>{user.email || "user@email.com"}</p>
          </div>
        </div>

        <p style={{ marginTop: "20px", color: "#555" }}>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
          Dolore Magna Aliquyam Erat.
        </p>
      </div>
    </div>
  );
}

export default Account;