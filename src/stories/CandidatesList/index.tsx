import { StyledCandidateList, Label } from "./styles";
import {
  Candidate as CandidateInterface,
  Query,
} from "../../common/interfaces";
import { Candidate } from "../Candidate/Candidate";

import { UpDownIcon } from "@chakra-ui/icons";
import { titleCase } from "../../utils/format";

import {
  SortingTypes,
  sortingtypes,
  filterFields,
} from "../../common/types";

interface CandidateProps {
  candidates: CandidateInterface[];
  query: Query;
  handleClick: (e?: any) => void;
}
export const CandidateList = ({
  candidates,
  query,
  handleClick,
  ...props
}: CandidateProps) => {

  return (
    <StyledCandidateList className="StyledCandidateList">
      <div>
        <div id="list-head">
          {filterFields.map((key, i) => {
            const { name, isSortable, isFilterBarOnly } = key;
            let value: any = "";

            if (isSortable)
              value = sortingtypes[sortingtypes.indexOf(name as SortingTypes)];

            return (
              !isFilterBarOnly && (
                <Label
                  key={i}
                  onClick={(e) =>
                    isSortable ? handleClick({ sortBy: value }) : null
                  }
                  className={`field${isSortable && " field-sortable"}`}>
                  {titleCase(name)}
                  {isSortable && <UpDownIcon ml={2} />}
                </Label>
              )
            );
          })}
        </div>
        <div id="list-container">
          {candidates.map((candidate) => (
            <Candidate candidate={candidate} key={candidate.id} />
          ))}
        </div>
      </div>
    </StyledCandidateList>
  );
};
