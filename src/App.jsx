import Home from "./pages/Home";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import { AuthProvider } from "./utils/auth";

function App() {
  return (
    <AuthProvider>
      <div className="App bg-gray-800">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="create" element={<CreatePost />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
