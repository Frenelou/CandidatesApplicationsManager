import styled from "styled-components";

export const StyledCandidate = styled.div`
  display: grid;
  grid-template-columns: minmax(50px, 2fr) 2fr 300px 2fr minmax(50px, 200px) 1fr;
  align-items: center;
  padding: 0.8rem;
  :nth-child(odd) {
    background-color: #dfdfdf;
  }
  p:last-child {
    margin-left: 2rem;
    place-self: center left;
  }
`;

export const Label = styled.label`
  font-family: var(--chakra-fonts-heading);
  font-weight: var(--chakra-fontWeights-bold);
  text-transform: uppercase;
  letter-spacing: var(--chakra-letterSpacings-wider);
  padding-inline-start: var(--chakra-space-6);
  padding-inline-end: var(--chakra-space-6);
  padding-top: var(--chakra-space-3);
  padding-bottom: var(--chakra-space-3);
  line-height: var(--chakra-lineHeights-4);
  font-size: var(--chakra-fontSizes-sm);
  color: var(--chakra-colors-gray-600);
  border-color: var(--chakra-colors-gray-100);
`;

export const StyledCandidateHead = styled.div`
  display: grid;
  grid-template-columns: minmax(50px, 2fr) 2fr 300px 2fr minmax(50px, 200px) 1fr;
  align-items: center;
`;
