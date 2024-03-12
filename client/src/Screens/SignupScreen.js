import React, { useEffect, useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { register } from "../axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const SignupScreen = ({ user }) => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    corretcionPassword: "",
    phoneNumber: phoneNumber,
  });
  const [disabled, setDisableed] = useState(true);
  useEffect(() => {
    if (
      formData.password.length >= 8 &&
      formData.fullname.length >= 3 &&
      formData.phoneNumber.length >= 10 &&
      formData.email.length >= 5 &&
      formData.corretcionPassword === formData.password
    )
      setDisableed(false);
    else setDisableed(true);
  }, [formData]);
  useEffect(
    () => setFormData({ ...formData, phoneNumber: phoneNumber }),
    [phoneNumber]
  );
  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);
  return (
    <Container>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                register(formData)
                  .then((res) => {
                    navigate("/signin");
                    toast.success("Kayıt Başarılı");
                  })
                  .catch((err) => toast.error(err.response.data.message));
              }}
            >
              <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Label>Ad ve Soyad</Form.Label>
                <Form.Control
                  onChange={(e) =>
                    setFormData({ ...formData, fullname: e.target.value })
                  }
                  type="name"
                  placeholder="Adınızı ve Soyadınızı Girin"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>E-posta Adresi</Form.Label>
                <Form.Control
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  type="email"
                  placeholder="E-posta girin"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Parola</Form.Label>
                <Form.Control
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  type="password"
                  placeholder="Parolanızı girin"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Parola Tekrarı</Form.Label>
                <Form.Control
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      corretcionPassword: e.target.value,
                    })
                  }
                  type="password"
                  placeholder="Parolanızı tekrar girin"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPhone">
                <Form.Label>Telefon Numarası</Form.Label>
                <PhoneInput
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  defaultCountry="TR"
                />
              </Form.Group>
              <Form.Group className="d-grid">
                <Button
                  disabled={disabled}
                  variant="primary"
                  type="submit"
                  className="mt-4"
                >
                  Kayıt Ol
                </Button>
              </Form.Group>
            </Form>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                marginTop: "10px",
              }}
            >
              <p
                style={{
                  color: "red",
                  display: formData.password.length >= 8 && "none",
                }}
              >
                * Parolanız en az 8 karakter olmalı
              </p>
              <p
                style={{
                  color: "red",
                  display: formData.fullname.length >= 5 && "none",
                }}
              >
                * Adınız ve Soyadınız en az 5 karakter olmalı
              </p>
              <p
                style={{
                  color: "red",
                  display:
                    formData.password === formData.corretcionPassword && "none",
                }}
              >
                * Parolalar uyuşmuyor
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default SignupScreen;
