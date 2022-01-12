import styled from "styled-components";
import { devices } from "../../styles/devices";

export const StyledCandidateList = styled.div`
  @media ${devices.mobileOnly} {
    > div {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
    }
  }
  @media ${devices.laptop} {
    overflow: scroll;
    width: 100%;
    box-shadow: var(--chakra-shadows-xs);
    > div {
      min-width: max-content;
    }
  }
`;
export const StyledCandidate = styled.div`
  align-items: center;
  padding: 0.8rem 0;
  p:last-child {
    margin-left: 2rem;
    place-self: center left;
  }
  @media ${devices.mobileOnly}, {
    border: 1px solid var(--chakra-colors-gray-100);
    border-radius: 1rem;
    width: 300px;
  }
  @media ${devices.laptop} {
    width: 100%;
    display: grid;
    grid-template-columns: minmax(50px, 2fr) 2fr 300px 2fr minmax(50px, 250px) 1fr;
    align-items: center;
    :nth-child(odd) {
      background-color: #dfdfdf;
    }
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
  &.field {
    color: var(--chakra-colors-gray-600);

    &-sortable {
      cursor: pointer;
    }
  }
`;

export const StyledCandidateHead = styled.div`
  display: none;
  @media ${devices.laptop} {
    display: grid;
    grid-template-columns: minmax(50px, 2fr) 2fr 300px 2fr minmax(50px, 250px) 1fr;
    align-items: center;
  }
`;
