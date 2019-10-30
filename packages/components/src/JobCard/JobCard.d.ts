/// <reference types="react" />
export declare type JobCardType = 'CARD' | 'LIST';
export interface Job {
    title: string;
    url: string;
    imageUrl: string;
    companyName: string;
    postCode: string;
    city: string;
}
export interface JobCardProps {
    loading: boolean;
    type: JobCardType;
    job?: Job;
}
export declare const JobCard: ({ job, loading, type }: JobCardProps) => JSX.Element | null;
