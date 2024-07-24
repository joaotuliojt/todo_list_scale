import styled from "styled-components";
import { IFilterStyleProps } from "./types";

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.15);
  padding: 10px;
  border-radius: 8px;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  gap: 8px;
`;

export const Button = styled.button<IFilterStyleProps>`
  padding: 10px;
  background-color: ${(props) =>
    props.active ? "rgba(0, 123, 255, 0.75)" : "rgba(108, 117, 125, 0.75)"};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  backdrop-filter: blur(5px);

  &:hover {
    background-color: ${(props) =>
      props.active ? "rgba(0, 123, 255, 1)" : "rgba(108, 117, 125, 1)"};
  }
`;
