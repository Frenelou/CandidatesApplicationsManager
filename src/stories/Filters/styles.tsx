import styled from "styled-components";
import { devices } from "../../styles/devices";

export const StyledFilterBar = styled.div`
  display: flex;
  margin: auto;
  padding: 0.5rem 0;
  gap: 1rem;
  width: 100%;
  align-items: end;
  .chakra-form-control label {
    margin-bottom: 0.5rem;
  }
  flex-wrap: wrap;
  @media ${devices.tablet} {
    flex-wrap: nowrap;
  }
  .candidate-sort-button {
    width: 100%;
    @media ${devices.tablet} {
      display: none;
    }
  }
  .filter-field--sortBy {
    @media ${devices.laptop} {
      display: none;
    }
  }
`;

export const Label = styled.label`
  font-family: var(--chakra-fonts-heading);
  font-weight: var(--chakra-fontWeights-bold);
  letter-spacing: var(--chakra-letterSpacings-wider);
  line-height: var(--chakra-lineHeights-4);
  font-size: var(--chakra-fontSizes-sm);
  color: var(--chakra-colors-gray-600);
  border-color: var(--chakra-colors-gray-100);
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  display: flex;
  input {
    margin-left: 1rem;
  }
`;
