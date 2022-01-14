import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { RootState } from "../app/store";

import {
  fetchCandidates,
  filterCandidates,
  sortCandidates,
} from "../features/candidateSlice";
import { setQuery } from "../features/querySlice";

import { Grid } from "@chakra-ui/react";
import { Header } from "../stories/Header";
import { CandidateList } from "../stories/CandidatesList";
import { CandidateListHead as Filters } from "../stories/Filters";

function Dashboard() {
  const dispatch = useDispatch();
  let [searchParams, setSearchParams] = useSearchParams();

  const query: any = useSelector((state: RootState) => state.query.query);
  const { loading, error, candidates } = useSelector(
    (state: RootState) => state.candidates
  );

  useEffect(() => {
    if (loading) {
      let queryWithSearchParams = {
        ...query,
        ...Object.fromEntries([...searchParams].filter((f) => f[1] !== "")),
      };
      dispatch(setQuery(queryWithSearchParams));
      dispatch(fetchCandidates(queryWithSearchParams));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (e: any) => {
    let newQuery = {
      ...query,
      ...e,
      asc: e.sortBy !== query.sortBy ? true : !query.asc,
    };

    dispatch(setQuery(newQuery));
    setSearchParams(newQuery);
    dispatch(filterCandidates(newQuery));
    dispatch(sortCandidates(newQuery));
  };

  return (
    <Grid gap={4} height="100vh" templateRows="minmax(10%, 50px) auto 1fr">
      <Header />
      {loading && <h2>Fetching candidates...</h2>}
      {error && <h2>Could not get candidates</h2>}
      {!loading && !error && (
        <>
          <Filters query={query} handleClick={handleClick} />
          <CandidateList
            query={query}
            candidates={candidates}
            handleClick={handleClick}
          />
        </>
      )}
    </Grid>
  );
}

export default Dashboard;
