import React from "react";
import { StyledSection } from './styled/result-styled';

const Resultado = ({ resultado }) => {
  const { kg } = resultado;

  let planetas = [
    {
      id: 1,
      peso: ((parseFloat(kg) / 9.81) * 3.7).toFixed(2),
      nombre: "Mercurio",
    },
    {
      id: 2,
      peso: ((parseFloat(kg) / 9.81) * 8.87).toFixed(2),
      nombre: "Venus",
    },
    {
      id: 3,
      peso: parseFloat(kg).toFixed(2),
      nombre: "Tierra",
    },
    {
      id: 4,
      peso: ((parseFloat(kg) / 9.81) * 3.71).toFixed(2),
      nombre: "Marte",
    },
    {
      id: 5,
      peso: ((parseFloat(kg) / 9.81) * 23.12).toFixed(2),
      nombre: "Júpiter",
    },
    {
      id: 6,
      peso: ((parseFloat(kg) / 9.81) * 8.96).toFixed(2),
      nombre: "Saturno",
    },
    {
      id: 7,
      peso: ((parseFloat(kg) / 9.81) * 8.69).toFixed(2),
      nombre: "Urano",
    },
    {
      id: 8,
      peso: ((parseFloat(kg) / 9.81) * 11).toFixed(2),
      nombre: "Neptuno",
    },
    {
      id: 9,
      peso: ((parseFloat(kg) / 9.81) * 0.81).toFixed(2),
      nombre: "Plutón",
    },
  ];

  return (
    <StyledSection>
      {kg
        ? planetas.map((planeta) => (
            <div key={planeta.id} className="columns">
              <p>
                {planeta.peso}
                <span>kg</span>
              </p>
              <h3>{planeta.nombre}</h3>
            </div>
          ))
        : null}
    </StyledSection>
  );
};

export default Resultado;
