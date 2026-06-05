import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#000",
      }}
    >
      <div style={{ width: "360px", color: "#fff" }}>
        <h1 style={{ fontSize: "32px", marginBottom: "32px" }}>Sign in to X</h1>
        {error && (
          <p style={{ color: "#f4212e", marginBottom: "16px" }}>{error}</p>
        )}
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "12px",
              borderRadius: "4px",
              border: "1px solid #333",
              background: "#000",
              color: "#fff",
              fontSize: "16px",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: "12px",
              borderRadius: "4px",
              border: "1px solid #333",
              background: "#000",
              color: "#fff",
              fontSize: "16px",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "12px",
              borderRadius: "20px",
              border: "none",
              background: "#fff",
              color: "#000",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Sign in
          </button>
        </form>
        <p style={{ marginTop: "24px", color: "#71767b" }}>
          Don't have an account?{" "}
          <Link to="/signup" style={{ color: "#1d9bf0" }}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
