import styled from "styled-components";

export const StyledSection = styled.section`
  margin-top: 5rem;

  .columns {
    p {
      font-weight: 600;
      color: #ff454f;

      span {
        font-weight: 500;
        @media (max-width: 599px) {
          font-size: 1.2rem;
        }
        @media (min-width: 1200px) {
          font-size: 1.5rem;
        }
      }

      @media (max-width: 599px) {
        font-size: 1.5rem;
      }
      @media (min-width: 600px) {
        font-size: 2.2rem;
      }
      @media (min-width: 900px) {
        font-size: 3.5rem;
      }
      @media (min-width: 1200px) {
        font-size: 2rem;
      }
    }

    h3 {
      color: #ffffff;
      margin-top: 0;

      @media (max-width: 599px) {
        font-size: 1.8rem;
      }
      @media (min-width: 600px) {
        font-size: 2.5rem;
      }
      @media (min-width: 900px) {
        font-size: 3.5rem;
      }
      @media (min-width: 1200px) {
        font-size: 2rem;
      }
    }

    @media (max-width: 599px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    @media (min-width: 600px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  @media (max-width: 599px) {
    display: grid;
    row-gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 600px) {
    display: grid;
    row-gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 1200px) {
    margin-top: 20rem;
    grid-template-columns: repeat(5, 15%);
  }
  @media (min-width: 1400px) {
    margin-top: 15rem;
  }
  @media (min-width: 1800px) {
    margin-top: 15rem;
  }
`;