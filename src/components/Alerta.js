import React from 'react';
import styled from "styled-components";

const StyledError = styled.p`
  color: #ff454f;
  font-size: 1.5rem;
`;

const Alerta = ({mensaje}) => {
    return ( 
        <StyledError>{mensaje}</StyledError>
     );
}
 
export default Alerta;