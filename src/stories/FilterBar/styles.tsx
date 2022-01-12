import styled from "styled-components";

export const StyledFilterBar = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin: auto;
  padding: 0.5rem 0;
  gap: 1rem;
  align-items: end;
  .chakra-form-control label {
    margin-bottom: 0.5rem;
  }
`;

export const Label = styled.label`
  font-family: var(--chakra-fonts-heading);
  font-weight: var(--chakra-fontWeights-bold);
  text-transform: uppercase;
  letter-spacing: var(--chakra-letterSpacings-wider);
  line-height: var(--chakra-lineHeights-4);
  font-size: var(--chakra-fontSizes-sm);
  color: var(--chakra-colors-gray-600);
  border-color: var(--chakra-colors-gray-100);
  align-items: center;
  display: flex;
  justify-content: center;
  input {
    margin-left: 1rem;
  }
`;
