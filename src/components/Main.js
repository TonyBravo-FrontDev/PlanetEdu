import React, { Fragment, useState } from "react";
import { StyledMain, StyledSection, StyledForm } from "./styled/main-styled";
import Alerta from "./Alerta";
import Resultado from "./Resultado";

const Main = () => {
  const [peso, setPeso] = useState({ kg: "" });
  const [resultado, setResultado] = useState({});
  const [error, setError] = useState(false);
  const { kg } = peso;

  const changeForm = (e) => {
    setPeso({
      ...peso,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitButton = (e) => {
    e.preventDefault();

    if (kg.trim() === "") {
      return setError(true);
    }
    setError(false);

    setResultado(peso);
    setPeso({ kg: "" });
  };

  return (
    <Fragment>
      <StyledMain>
        <StyledSection>
          <h2>
            ¿Quieres saber cuanto pesas en los planetas de nuestro{" "}
            <span>sistema solar</span>?
          </h2>
          <StyledForm onSubmit={handleSubmitButton} id="formulario">
            <input
              value={kg}
              onChange={changeForm}
              name="kg"
              type="number"
              placeholder="¿Cual es tu peso en Kg?"
            />
            <button id="submit" type="submit">
              <i className="fas fa-play"></i>
            </button>
          </StyledForm>
          {error ? <Alerta mensaje="Escribe tu Peso" /> : null}
        </StyledSection>
        <Resultado resultado={resultado} />
      </StyledMain>
    </Fragment>
  );
};

export default Main;
