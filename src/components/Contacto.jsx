function Contacto () {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <div
        className="p-4 border rounded shadow"
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "#a9e8fbff", // celeste claro
          border: "1px solid #b3d7ff",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        <h3 className="mb-3 text-center" style={{ color: "#005c99" }}>
          Formulario de Contacto
        </h3>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Nombre"
          style={{ fontFamily: "inherit" }}
        />
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Mensaje"
          style={{ fontFamily: "inherit" }}
        />
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Correo Electrónico"
          style={{ fontFamily: "inherit" }}
        />
        <button className="btn btn-primary w-100">Enviar</button>
      </div>
    </div>
  );
}

export default Contacto;
