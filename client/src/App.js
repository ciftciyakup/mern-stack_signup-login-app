import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import HomeScreen from "./Screens/HomeScreen";
import AuthScreen from "./Screens/AuthScreen";
import SignupScreen from "./Screens/SignupScreen";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("user") && !user)
      setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  return (
    <Router>
      <Header user={user} setUser={setUser} />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen user={user} />} exact />
            <Route
              path="/signin"
              element={<AuthScreen user={user} setUser={setUser} />}
            />
            <Route path="/signup" element={<SignupScreen user={user} />} />
          </Routes>
        </Container>
      </main>
      <Toaster position="top-center" toastOptions={{ duration: 2750 }} />
    </Router>
  );
}

export default App;
