import { StatusTypes, SortingTypes, CandidateTypes } from '../common/types';
export interface Candidate extends CandidateTypes {
    id: number;
    application_date: string;
    birth_date: string;
    email: string;
    name: string;
    position_applied: string;
    status: string;
    year_of_experience: number;
}

export interface Query {
    name?: string,
    status?: StatusTypes
    position_applied?: string,
    sortBy?: SortingTypes
}

export interface CandidateState {
    value: Candidate[],
    loading: boolean,
    error: string,
    query: Query
}