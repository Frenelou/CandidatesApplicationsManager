import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCandidates } from "../features/candidateSlice";
import { RootState } from "../app/store";
import { Candidate } from "../stories/Candidate/Candidate";
import { FilterBar } from "../stories/FilterBar";
import { MyHeader } from "../stories/MyHeader";
import { StyledCandidateHead , Label} from "../stories/Candidate/styles";
import { Box, Grid } from "@chakra-ui/react";

function Dashboard() {
  const dispatch = useDispatch();
  // useEffect(() => {
  // dispatch(fetchCandidates());

  // }, []);
  const {
    value: candidates,
    loading,
    error,
  } = useSelector((state: RootState) => state.candidates);
  return (
    <Grid
      gap={4}
      height="100vh"
      templateRows="minmax(10%, 50px) minmax(10%, 80px) 50px auto">
      <MyHeader />
      <FilterBar />
      <Box>
        <StyledCandidateHead>
          <Label>Name</Label>
          <Label>Email</Label>
          <Label>Year of experience</Label>
          <Label>Position applied</Label>
          <Label>Application date</Label>
          <Label>Status</Label>
        </StyledCandidateHead>
        {candidates.map((candidate) => (
          <Candidate candidate={candidate} key={candidate.id} />
        ))}
      </Box>
    </Grid>
  );
}

export default Dashboard;
