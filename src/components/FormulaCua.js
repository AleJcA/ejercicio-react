import React, { useState } from "react";
import Swal from "sweetalert2";

function FormulaCua() {
  const [values, setValues] = useState({
    a: "",
    b: "",
    c: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { a, b, c } = values;

    if (!a || !b || !c) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos son obligatorios!",
      });
      return;
    }

    const discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
      Swal.fire({
        icon: "error",
        title: "Sin solución real",
        text: "La ecuación no tiene soluciones reales.",
      });
      return;
    }

    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    Swal.fire({
      icon: "success",
      title: "Soluciones calculadas",
      html: `<p><strong>X1:</strong> ${x1}</p><p><strong>X2:</strong> ${x2}</p>`,
    });
  };

  return (
    <div className="container">
      <div className="form-wrapper mt-5 p-4 shadow-lg rounded">
        <h2 className="text-center mb-4">Calculadora de Fórmula Cuadrática</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="a">Valor de A</label>
            <input
              type="number"
              className="form-control"
              id="a"
              name="a"
              value={values.a}
              onChange={handleChange}

            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="b">Valor de B</label>
            <input
              type="number"
              className="form-control"
              id="b"
              name="b"
              value={values.b}
              onChange={handleChange}

            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="c">Valor de C</label>
            <input
              type="number"
              className="form-control"
              id="c"
              name="c"
              value={values.c}
              onChange={handleChange}

            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Calcular
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormulaCua;