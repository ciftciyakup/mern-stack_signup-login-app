import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../axios";
import { toast } from "react-hot-toast";

const AuthScreen = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Form
            onSubmit={(e) => {
              e.preventDefault();

              login(formData)
                .then((res) => {
                  localStorage.setItem("user", JSON.stringify(res.data.user));
                  setUser(res.data.user);
                  navigate("/");
                  toast.success("Giriş Başarılı");
                })
                .catch((err) => toast.error(err.response.data.message));
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>E-posta Adresi</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                type="email"
                placeholder="E-posta girin"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Parola</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                type="password"
                placeholder="Parola"
              />
            </Form.Group>
            <Form.Group className="d-grid">
              <Button
                disabled={formData.email === "" || formData.password === ""}
                type="submit"
                variant="primary"
                size="lg"
              >
                Giriş Yap
              </Button>
              <Form.Text className="text-center mt-2">
                Bir hesabınız yok mu? <Link to="/signup">Kayıt Ol</Link>
              </Form.Text>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AuthScreen;
