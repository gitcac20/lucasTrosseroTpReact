import { Container, Row, Col, Image } from "react-bootstrap";

function MainBootstrap() {
  return (
    <Container className="my-4">
      <Row className="align-items-center">
        <Col xs={12} md={4} lg={4}>
          <Image
            src="https://i.postimg.cc/wMXm6R2Q/IMG-20250720-WA0000-1.jpg"
            alt="cuaderno lapices de color mochila"
            fluid
            rounded
          />
        </Col>
        <Col xs={12} md={8} lg={8}>
          <h2>Compra todo lo que necesitas aca</h2>
          <p>
            Registrate para comprar o adm admin@gmail.com test12 
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default MainBootstrap;
