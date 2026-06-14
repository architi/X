import Sidebar from "../src/components/Sidebar";

function Home() {
  return (
    <div
      style={{ display: "flex", backgroundColor: "#000", minHeight: "100vh" }}
    >
      <Sidebar />

      <div
        style={{
          marginLeft: "275px",
          flex: 1,
          maxWidth: "600px",
          borderRight: "1px solid #2f3336",
          color: "#fff",
        }}
      >
        <div
          style={{
            padding: "16px",
            borderBottom: "1px solid #2f3336",
            fontSize: "20px",
            fontWeight: "bold",
            position: "sticky",
            top: 0,
            backgroundColor: "#000",
          }}
        >
          Home
        </div>

        <div style={{ padding: "16px", color: "#71767b" }}>
          Feed will go here
        </div>
      </div>
    </div>
  );
}

export default Home;
