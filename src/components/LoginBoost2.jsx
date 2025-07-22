import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';
import { crearUsuario, loginEmailPass } from '../auth/firebase';
import { dispararSweetBasico } from '../assets/SweetAlert';
import { Container, Form, Button, Card } from 'react-bootstrap';

function LoginBoost2() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(true);
  const { login, user, logout, admin } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  function iniciarSesionEmailPass(e) {
    e.preventDefault();
    loginEmailPass(usuario, password).then(() => {
      login(usuario);
      dispararSweetBasico("Logeo exitoso", "", "success", "Confirmar");
    }).catch((error) => {
      if (error.code === "auth/invalid-credential") {
        dispararSweetBasico("Credenciales incorrectas", "", "error", "Cerrar");
      }
    });
  }

  function registrarUsuario(e) {
    e.preventDefault();
    crearUsuario(usuario, password).then(() => {
      login(usuario);
      dispararSweetBasico("Registro exitoso", "", "success", "Confirmar");
    }).catch((error) => {
      if (error.code === "auth/invalid-credential") {
        dispararSweetBasico("Credenciales incorrectas", "", "error", "Cerrar");
      }
      if (error.code === "auth/weak-password") {
        dispararSweetBasico("Contraseña débil", "Debe tener al menos 6 caracteres", "error", "Cerrar");
      }
    });
  }

  const toggleForm = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  if (user || admin) {
    return (
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Button variant="danger" onClick={handleLogout}>Cerrar sesión</Button>
      </Container>
    );
  }

  return (
    <Container
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        backgroundColor: '#f5f5f5',
        fontFamily: "'Segoe UI', 'Roboto', sans-serif",
      }}
    >
      <Card
        style={{
          width: '100%',
          maxWidth: '400px',
          padding: '30px',
          borderRadius: '15px',
          border: '1px solid #ccc',
          backgroundColor: '#a9e8fbff',
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Card.Body>
          <h3 className="text-center mb-4" style={{ fontWeight: '600' }}>
            {show ? 'Iniciar sesión' : 'Registrarse'}
          </h3>
          <Form onSubmit={show ? iniciarSesionEmailPass : registrarUsuario}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mb-2">
              {show ? 'Ingresar' : 'Registrarse'}
            </Button>
            <Button variant="outline-secondary" className="w-100" onClick={toggleForm}>
              {show ? '¿No tienes cuenta? Registrate' : '¿Ya tienes cuenta? Inicia sesión'}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default LoginBoost2;



