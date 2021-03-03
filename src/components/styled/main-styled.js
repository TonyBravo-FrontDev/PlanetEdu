import styled from "styled-components";

export const StyledMain = styled.main`
  width: 90%;
  margin: auto;
`;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    line-height: 1.6;
    text-align: center;
    color: white;
    font-weight: 500;

    span {
      color: #ff454f;
    }

    @media (min-width: 600px) {
      width: 90%;
      font-size: 2rem;
    }
    @media (min-width: 768px) {
      width: 80%;
      font-size: 2.5rem;
    }
    @media (min-width: 900px) {
      width: 80%;
      font-size: 3.2rem;
    }
    @media (min-width: 1200px) {
      width: 40%;
      font-size: 2rem;
    }
    @media (min-width: 1800px) {
      width: 40%;
      font-size: 3rem;
    }
  }
`;

export const StyledForm = styled.form`
  width: 70%;
  height: 5rem;
  margin: auto;
  display: grid;
  padding: 0 1rem;
  margin-top: 2rem;
  column-gap: 2rem;
  grid-template-columns: 70% 20%;
  align-items: center;

  justify-content: space-between;
  border-radius: 32px;
  background-color: #d2d2d206;

  input {
    width: 100%;
    border: none;
    padding: 15px 8px;
    color: white;
    --webkit-appearance: none;
    background-color: transparent;

    &[type="number"]::-webkit-inner-spin-button,
    &[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &::placeholder {
      color: #ffffff81;

      @media (max-width: 599px) {
        font-size: 1.5rem;
      }
      @media (min-width: 1200px) {
        color: white;
      }
      @media (min-width: 1800px) {
        color: #ffffff71;
      }
    }

    @media (max-width: 599px) {
      font-size: 1.5rem;
    }
    @media (min-width: 600px) {
      font-size: 2rem;
    }
    @media (min-width: 900px) {
      font-size: 3rem;
    }
    @media (min-width: 1200px) {
      font-size: 2rem;
    }
    @media (min-width: 1800px) {
      font-size: 1.5rem;
      color: #ffffff71;
      padding: 15px 8px;
    }
  }

  #submit {
    width: 4rem;
    height: 4rem;
    border: none;
    cursor: pointer;
    border-radius: 32px;
    background-color: white;

    .fa-play {
      color: #ff454f;
      @media (min-width: 600px) {
        font-size: 2rem;
      }
    }
    @media (min-width: 600px) {
      width: 6rem;
      height: 6rem;
    }
    @media (min-width: 900px) {
      width: 7rem;
      height: 7rem;
    }
    @media (min-width: 1200px) {
      width: 5rem;
      height: 5rem;
    }
  }

  @media (min-width: 600px) {
    width: 80%;
    height: 8rem;
    border-radius: 100px;
  }
  @media (min-width: 900px) {
    width: 60%;
    height: 10rem;
  }
  @media (min-width: 1200px) {
    width: 30%;
    height: 8rem;
    background-color: #d2d2d210;
  }
  @media (min-width: 1800px) {
    width: 15%;
    height: 6rem;
    background-color: #d2d2d210;
    grid-template-columns: 70% 15%;
  }
`;
