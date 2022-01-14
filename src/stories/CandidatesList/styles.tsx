import styled from "styled-components";
import { devices } from "../../styles/devices";

export const StyledCandidateList = styled.div`
  --headerHeight: 3rem;
  @media ${devices.laptop} {
    overflow:auto;
    width: 100%;
    box-shadow: var(--chakra-shadows-xs);
  }
  > div {
    @media ${devices.laptopOnly} {
      width: max-content;
    }
      height: 100%;
    @media ${devices.laptopL} {
      width: 100%;
    }
  }

  #list-container {
    @media ${devices.mobileOnly} {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
    }
      height: calc(100% - var(--headerHeight));
      overflow: scroll;
      &::-webkit-scrollbar {
        display: none;
      }

    @media ${devices.laptopL} {
      min-width: 100%;
    }
  }
  #list-head {
    display: none;
    @media ${devices.laptop} {
      height: var(--headerHeight);
      display: grid;
      grid-template-columns: minmax(50px, 2fr) 2fr 300px 2fr minmax(50px, 250px) 1fr;
      align-items: center;
      border-bottom: 1px solid var(--chakra-colors-gray-100);
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
  @media ${devices.mobileOnly} {
    border: 1px solid var(--chakra-colors-gray-100);
    border-radius: 1rem;
    width: minmax(400px, 100%);
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
