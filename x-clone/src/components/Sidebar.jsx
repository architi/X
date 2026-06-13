import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Sidebar() {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate("/login");
  };

  return (
    <div
      style={{
        width: "275px",
        height: "100vh",
        borderRight: "1px solid #2f3336",
        padding: "8px 12px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "fixed",
        left: 0,
        top: 0,
        color: "#fff",
      }}
    >
      <div>
        <div style={{ fontSize: "28px", padding: "12px", marginBottom: "8px" }}>
          𝕏
        </div>

        <nav style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <Link to="/" style={navLinkStyle}>
            Home
          </Link>
          <Link to="/profile" style={navLinkStyle}>
            Profile
          </Link>
          <Link to="/bookmarks" style={navLinkStyle}>
            Bookmarks
          </Link>
        </nav>
      </div>

      <button
        onClick={handleLogout}
        style={{
          padding: "12px",
          borderRadius: "20px",
          border: "1px solid #333",
          background: "transparent",
          color: "#fff",
          cursor: "pointer",
          fontSize: "15px",
        }}
      >
        Log out
      </button>
    </div>
  );
}

const navLinkStyle = {
  fontSize: "20px",
  padding: "12px",
  borderRadius: "9999px",
  color: "#fff",
  textDecoration: "none",
  display: "block",
};

export default Sidebar;
