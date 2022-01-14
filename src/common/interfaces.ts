import { StatusTypes, SortingTypes, QueryTypes } from '../common/types';
export interface Candidate {
    id: number;
    name: string;
    email: string;
    birth_date: string;
    position_applied: string;
    application_date: string;
    year_of_experience: number;
    status: string;
}

export interface Query extends QueryTypes {
    name?: string,
    status?: StatusTypes
    position_applied?: string,
    sortBy: SortingTypes,
    asc: boolean
}

export interface CandidateState {
    candidates: Candidate[],
    unfilteredCandidates: Candidate[],
    loading: boolean,
    error?: string,
}