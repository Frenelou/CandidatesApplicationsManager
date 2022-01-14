import {
  StyledFilterBar,
  Label,
} from "./styles";

import { FormControl, Input } from "@chakra-ui/react";
import { Query } from "../../common/interfaces";
import {
  FiltersTypes,
  filterFields,
} from "../../common/types";

import { SelectField } from "../SelectField";
import { titleCase } from "../../utils/format";

interface Filters {
  query: Query;
  handleClick: (e: any) => void;
}

export const CandidateListHead = ({ query, handleClick, ...args }: Filters) => {

  return (
    <StyledFilterBar
      className={["storybook-FilterBarHead", `storybook-FilterBarHead--`].join(
        " "
      )}>
      {filterFields
        .filter((f) => f.inFilterBar)
        .map((key, i) => {
          const { name, isFilterable, isSelect, options } = key;
          let value: any = query[name as keyof FiltersTypes];

          return (
            <FormControl key={i} className={`filter-field--${name}`}>
              <Label>{titleCase(name)}</Label>

              {isFilterable && (
                <Input
                  id={name}
                  type={name}
                  name={name}
                  value={value}
                  onChange={(e) =>
                    handleClick({
                      [e.currentTarget.name]: e.currentTarget.value,
                    })
                  }
                />
              )}

              {isSelect && (
                <SelectField
                  name={name}
                  value={value}
                  options={options}
                  onChange={handleClick}
                />
              )}
            </FormControl>
          );
        })}
    </StyledFilterBar>
  );
};
