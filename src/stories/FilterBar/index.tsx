import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { StyledFilterBar, Label } from "./styles";

import { FormControl, Select, Input, Button } from "@chakra-ui/react";
import {
  filterCandidates,
  sortCandidates,
} from "../../features/candidateSlice";
import {
  SelectAndInputEvent,
  SortingTypes,
  sortingtypes,
  statustypes,
} from "../../common/types";

import { titleCase } from "../../utils/format";
import { RootState } from "../../app/store";

export const FilterBar = ({ ...args }): any => {
  const dispatch = useDispatch();
  const query = useSelector((state: RootState) => state.candidates.query);
  const { sortBy, ...filters } = query;

  let [searchParams, setSearchParams] = useSearchParams();

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
    setSearchParams({ ...query });
  };

  return (
    <StyledFilterBar
      className={["storybook-filterbar", `storybook-filterbar--`].join(" ")}>
      {Object.entries(filters).map(([name, value]) => (
        <FormControl key={name}>
          <Label htmlFor={name}> {titleCase(name)}</Label>
          {name !== "status" && (
            <Input
              id={name}
              type={name}
              name={name}
              value={value}
              onChange={handleChange}
            />
          )}
          {name === "status" && (
            <Select
              placeholder="Select option"
              onChange={handleChange}
              value={value}
              name="status">
              {statustypes.map((o) => (
                <option value={o} key={`status-${o}`}>
                  {titleCase(o)}
                </option>
              ))}
            </Select>
          )}
        </FormControl>
      ))}

      {sortingtypes.map((sort_key, v) => (
        <Button
          key={sort_key}
          variant="outline"
          onClick={() => handleClick(sort_key)}>
          <Label>{titleCase(sort_key)}</Label>
        </Button>
      ))}
    </StyledFilterBar>
  );
};
