import React from "react";

import { Avatar } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

import "./styles.tsx";
import { StyledHeader } from "./styles";

interface HeaderProps {
  pageName?: string;
}

export const Header = ({ pageName }: HeaderProps) => (
  <StyledHeader>
    <Avatar  mr={4}/>
    <Heading>Applications</Heading>    
  </StyledHeader>
);
