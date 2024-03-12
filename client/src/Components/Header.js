import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function Header({ user, setUser }) {
  const navigate = useNavigate();
  return (
    <Navbar className="py-4" bg="primary" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={"/"} className="text-white">
          MongoDB, Express.js, React.js, Node.js Signup Login App
        </Navbar.Brand>
        {user ? (
          <Button
            variant="outline-light"
            onClick={() => {
              localStorage.removeItem("user");
              setUser(null);
              navigate("/signin");
              toast.success("Çıkış Başarılı");
            }}
          >
            Çıkış yap
          </Button>
        ) : (
          <Button variant="outline-light">
            <Link to="/signin" className="text-white text-decoration-none">
              Giriş yap
            </Link>
          </Button>
        )}
      </Container>
    </Navbar>
  );
}

export default Header;
