import React, { useState } from "react";

const Form = (props) => {
  const initStateValue = {
    direccion: "",
    inicial: "",
    final: "",
  };

  const [values, setValues] = useState(initStateValue);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...initStateValue });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Dirección</p>
        <input
          type="text"
          name="direccion"
          onChange={handleInputChange}
          value={values.direccion}
        />
        <p>Inicial</p>
        <input
          type="time"
          name="inicial"
          onChange={handleInputChange}
          value={values.inicial}
        />
        <p>Final</p>
        <input
          type="time"
          name="final"
          onChange={handleInputChange}
          value={values.final}
        />
        <br />
        <br />
        <br />
        <button>Guardar</button>
      </form>
    </div>
  );
};

export default Form;
