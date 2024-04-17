import { ApplicationStatus } from "@/types";

export interface Application{
applicationId:string,
applicant_id: string,
company:string,
role: string,
status: ApplicationStatus,
date_applied: Date,
follow_up_date: Date | null,
location?: string
}