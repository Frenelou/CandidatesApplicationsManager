import { type } from 'os';

export const statustypes = ["approved", "rejected", "waiting"] as const;
export type StatusTypes = typeof statustypes[number];

export const sortingtypes = ["position_applied", "year_of_experience", "application_date"] as const;
export type SortingTypes = typeof sortingtypes[number];

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
