import React from 'react';
export type JobCardType = 'CARD' | 'LIST';
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
declare const JobCard: ({ job, loading, type }: JobCardProps) => React.JSX.Element | null;
export default JobCard;
