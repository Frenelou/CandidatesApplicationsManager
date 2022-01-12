import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { StyledFilterBarHead, Label } from "./styles";
import { Candidate as CandidateInterface } from "../../common/interfaces";
import { UpDownIcon } from "@chakra-ui/icons";

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
  FiltersTypes,
  CandidateTypes,
  filterFields,
} from "../../common/types";
import { StyledCandidateHead } from "../Candidate/styles";

import { titleCase } from "../../utils/format";
import { RootState } from "../../app/store";

export const FilterBarHead = ({ ...args }): any => {
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
    <StyledFilterBarHead
      className={["storybook-FilterBarHead", `storybook-FilterBarHead--`].join(
        " "
      )}>
      {filterFields.map((key, i) => {
        const { name, isFilterable, isSelect } = key;
        let value: any = "";
        if (!isSelect && !isFilterable) return;
        if (isFilterable && filters.hasOwnProperty(name)) {
          value = filters[name as keyof FiltersTypes] || "";
        }

        return (
          <FormControl key={i}>
            <Label onClick={() => handleClick(value)} className={"field"}>
              {titleCase(name)}
            </Label>
            {isFilterable && (
              <Input
                id={name}
                type={name}
                name={name}
                value={value}
                onChange={handleChange}
              />
            )}

            {isSelect && (
              <Select
                placeholder="Select option"
                onChange={handleChange}
                value={value}
                name="status">
                {key.options?.map((o) => (
                  <option value={o} key={`status-${o}`}>
                    {titleCase(o)}
                  </option>
                ))}
              </Select>
            )}
          </FormControl>
        );
      })}
    </StyledFilterBarHead>
  );
};
