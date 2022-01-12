import React from "react";
import { StyledCandidate } from "./styles";
import { Candidate as CandidateInterface } from "../../common/interfaces";
import { Icon, Link } from "@chakra-ui/react";

interface CandidateProps {
  candidate: CandidateInterface;
}
export const Candidate = ({ candidate, ...props }: CandidateProps) => {
  const statusColors = {
    approved: "#38A169",
    rejected: "#E53E3E",
    waiting: "#DD6B20",
  };
  type StatusKey = keyof typeof statusColors;
  return (
    <StyledCandidate
      className={["storybook-candidate", `storybook-candidate--`].join(" ")}>
      <p>{candidate.name}</p>
      <Link href={`mailto:${candidate.email}`} isExternal>
        {candidate.email}
      </Link>
      <p>{candidate.year_of_experience}</p>
      <p>{candidate.position_applied}</p>
      <p>{candidate.application_date}</p>
      <p>
        <Icon viewBox="0 0 200 200" mr={2}>
          <path
            fill={statusColors[candidate.status as StatusKey]}
            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
          />
        </Icon>
        {candidate.status}
      </p>
    </StyledCandidate>
  );
};
