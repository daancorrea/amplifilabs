import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  display: grid;
  justify-items: center;
  gap: 2rem;
`;

export const Cards = styled.div`
  max-width: 512px;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  -webkit-box-shadow: 5px 5px 10px -1px rgba(0, 0, 0, 0.4);
  box-shadow: 5px 5px 10px -1px rgba(0, 0, 0, 0.4);
  border-radius: 0.25rem;
  button {
    height: 2.5rem;
    border: 0;
    background: #2c3179;
    border-radius: 0.25rem;

    color: #fff;
    font-size: 1.15rem;

    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;
