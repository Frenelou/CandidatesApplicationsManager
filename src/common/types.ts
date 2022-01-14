export const statustypes = ["", "approved", "rejected", "waiting"] as const;
export type StatusTypes = typeof statustypes[number];

export const sortingtypes = ["name", "position_applied", "year_of_experience", "application_date"] as const;
export type SortingTypes = typeof sortingtypes[number];

export const filterFields = [
    { name: "name", isFilterable: true, inFilterBar: true },
    { name: "email", type: "plain" },
    { name: "year_of_experience", isSortable: true },
    { name: "position_applied", isSortable: true, isFilterable: true, inFilterBar: true },
    { name: "application_date", isSortable: true },
    { name: "status", isSelect: true, options: statustypes, inFilterBar: true },
    { name: "sortBy", isSelect: true, options: sortingtypes, inFilterBar: true, isSortable: true, isFilterBarOnly: true },
];

export type FiltersTypes = {
    name?: string,
    status?: StatusTypes
    position_applied?: string,
}

export type QueryTypes = {
    name?: string,
    status?: StatusTypes
    position_applied?: string,
    sortBy: SortingTypes
    asc: boolean
}

export type SelectAndInputEvent = React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLSelectElement>
    | React.MouseEvent<HTMLLabelElement> 
