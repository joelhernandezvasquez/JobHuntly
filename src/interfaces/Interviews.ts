
export interface Interviewers{
  name: string, 
  jobTitle: string 
}

export interface Interviews {
  interviewID: string;
  interviewers: Interviewers [],
  description:string,
  company: string,
  candidateID: string;
  candidateName: string;
  date: string;
  InterviewDuration: string;
}
