import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import InterviewSetup from "./pages/InterviewSetup";
import InterviewRoom from "./pages/InterviewRoom";

function App() {
  return (
    <BrowserRouter>
 <Routes>
  <Route path="/" element={<Landing />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
  <Route path="/dashboard" element={<Dashboard />} />

  <Route
    path="/interview/setup"
    element={<InterviewSetup />}
  />

  <Route
    path="/interview/:id"
    element={<InterviewRoom />}
  />
</Routes>
    </BrowserRouter>
  );
}

export default App;