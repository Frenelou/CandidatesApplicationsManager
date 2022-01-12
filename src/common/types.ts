import { type } from 'os';


export const statustypes = ["approved", "rejected", "waiting"] as const;
export type StatusTypes = typeof statustypes[number];

export const sortingtypes = ["position_applied", "year_of_experience", "application_date"] as const;
export type SortingTypes = typeof sortingtypes[number];

export const filterFields = [
    { name: "name", isFilterable: true },
    { name: "email", type: "plain" },
    { name: "year_of_experience", isSortable: true },
    { name: "position_applied", isSortable: true, isFilterable: true },
    { name: "application_date", isSortable: true },
    { name: "status", isSelect: true, options: statustypes },
];
export type CandidateTypes = {
    id: number,
    application_date: string,
    birth_date: string,
    email: string,
    name: string,
    position_applied: string,
    status: string,
    year_of_experience: number,
}


export type FiltersTypes = {
    name?: string,
    status?: StatusTypes
    position_applied?: string,
}
export type QueryTypes = {
    name?: string,
    status?: StatusTypes
    position_applied?: string,
    sortBy?: SortingTypes
}

export type SelectAndInputEvent = React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLSelectElement>
