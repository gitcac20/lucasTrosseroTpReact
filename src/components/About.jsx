import { Container } from "react-bootstrap";

function Nosotros() {
  return (
    <Container className="d-flex justify-content-center my-5">
      <div
        className="p-4 rounded shadow text-center"
        style={{ maxWidth: "600px", backgroundColor: "#a9e8fbff", fontFamily: "Segoe UI" }}
      >
        <h2 className="mb-3">Sobre Nosotros</h2>
        <p>
          Bienvenidos a nuestra librería online:  
        </p>
        <p>
          Ofrecemos materiales  útiles coloridos y cuadernos que inspiran a aprender. ¡Nos encanta pensar que cada compra es un paso más hacia un gran futuro!
        </p>
        <p>
          Gracias por elegirnos . 
        </p>
      </div>
    </Container>
  );
}

export default Nosotros;
