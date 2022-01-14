import { Select } from "@chakra-ui/react";
import { titleCase } from "../../utils/format";

interface SelectFieldProps {
  name: string;
  value: any;
  options: any;
  onChange: (filter: any) => void;
}
export const SelectField = ({
  name,
  value,
  options,
  onChange,
  ...props
}: SelectFieldProps) => {
  return (
    <Select
      placeholder={" "}
      onChange={(e) =>
        onChange({ [e.currentTarget.name]: e.currentTarget.value })
      }
      value={value}
      name={name}>
      {options.map((o: any) => {
        const displayName = ["name", ""].includes(o) ? "All" : titleCase(o);
        return (
          <option value={o} key={`status-${o}`}>
            {displayName}
          </option>
        );
      })}
    </Select>
  );
};
