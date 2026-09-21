import { useEffect, useState } from "react";

function App() {
  const [backendStatus, setBackendStatus] = useState("Checking...");

  useEffect(() => {
    fetch("http://localhost:5000/api/health")
      .then((response) => response.json())
      .then((data) => {
        setBackendStatus(data.message);
      })
      .catch(() => {
        setBackendStatus("Backend connection failed");
      });
  }, []);

  return (
    <div>
      <h1>Intervia</h1>
      <p>AI-powered interviews, built for real practice.</p>

      <p>Backend status: {backendStatus}</p>
    </div>
  );
}

export default App;