import styled from "styled-components";

export const StyledButton = styled.button`
  color: ${(props) => props.theme.colors.card};
  padding: 1rem;
  border: 0;
  border-radius: 8px;
  &.disabled {
    background-color: ${(props) => props.theme.colors.disabled};
  }
  &.primary {
    background-color: ${(props) => props.theme.colors.button};
  }

  &.primary:hover {
    background: ${(props) => props.theme.colors.button};
    transition: 0.5s;
    cursor: pointer;
  }

  &.secondary {
    background-color: ${(props) => props.theme.colors.card};
    color: ${(props) => props.theme.colors.font};
    text-decoration: underline;
  }

  &.secondary:hover {
    background: ${(props) => props.theme.colors.card};
    transition: 0.5s;
    cursor: pointer;
  }
`;
