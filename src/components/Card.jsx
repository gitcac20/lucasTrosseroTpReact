import { useState } from "react";
import "../styles/Productos.css"
import { dispararSweetBasico } from "../assets/SweetAlert";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardProducto({ producto }) {
  return (
    <Card style={{ width: '180px' }}>
      <div
        style={{
          width: '180px',
          height: '180px',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0 auto',
        }}
      >
        <Card.Img
          variant="top"
          src={producto.imagen}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
          }}
        />
      </div>

      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>
          <strong>Precio:</strong> ${producto.price}
        </Card.Text>
        <Card.Text style={{ fontSize: "0.9em", color: "#555" }}>
          {producto.descripcion}
        </Card.Text>
        
        <Link to={`/productos/${producto.id}`}>
          <Button variant="primary">Ver detalles del producto</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}


export default CardProducto