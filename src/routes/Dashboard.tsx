import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { fetchCandidates } from "../features/candidateSlice";
import { RootState } from "../app/store";
import { Candidate } from "../stories/Candidate/Candidate";
import { FilterBarHead } from "../stories/FilterBarHead";
import { MyHeader } from "../stories/MyHeader";
import {
  StyledCandidateHead,
  Label,
  StyledCandidateList,
} from "../stories/Candidate/styles";
import { UpDownIcon } from "@chakra-ui/icons";
import { titleCase } from "../utils/format";

import {
  Box,
  Grid,
  FormControl,
  Select,
  Input,
  Button,
} from "@chakra-ui/react";
import { filterCandidates, sortCandidates } from "../features/candidateSlice";
import {
  SelectAndInputEvent,
  SortingTypes,
  sortingtypes,
  statustypes,
  FiltersTypes,
  CandidateTypes,
  filterFields,
} from "../common/types";
function Dashboard() {
  const dispatch = useDispatch();
  // useEffect(() => {
  // dispatch(fetchCandidates());

  // }, []);
  let [searchParams, setSearchParams] = useSearchParams();

  const candidates = useSelector((state: RootState) => state.candidates.value);
  const query = useSelector((state: RootState) => state.candidates.query);
  console.log("query", query);

  const { sortBy, ...filters } = query;
  const { loading, error } = useSelector(
    (state: RootState) => state.candidates
  );
  useEffect(() => {
    dispatch(filterCandidates(Object.fromEntries([...searchParams])));
    dispatch(sortCandidates());
  }, []);

  const handleChange = (e: SelectAndInputEvent) => {
    const { name, value } = e.currentTarget;
    dispatch(filterCandidates({ [name]: value }));
    setSearchParams({ ...query });
  };

  const handleClick = (sort_key: SortingTypes) => {
    dispatch(sortCandidates(sort_key));
    setSearchParams({ ...query, status: query.status || "" });
  };

  return (
    <Grid gap={4} height="100vh" templateRows="minmax(10%, 50px) auto auto">
      <MyHeader />
      <FilterBarHead />
      <StyledCandidateList className="StyledCandidateList">
        <div>
          <StyledCandidateHead>
            {filterFields.map((key, i) => {
              const { name, isSortable } = key;
              let value: any = "";

              if (isSortable)
                value = sortingtypes.indexOf(name as SortingTypes);

              return (
                <Label
                  key={i}
                  onClick={() => handleClick(value)}
                  className={`field${isSortable && " field-sortable"}`}>
                  {titleCase(name)}
                  {isSortable && <UpDownIcon ml={2} />}
                </Label>
              );
            })}
          </StyledCandidateHead>
          {candidates.map((candidate) => (
            <Candidate candidate={candidate} key={candidate.id} />
          ))}
        </div>
      </StyledCandidateList>
    </Grid>
  );
}

export default Dashboard;
