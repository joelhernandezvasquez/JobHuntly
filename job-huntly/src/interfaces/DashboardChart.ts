
type ApplicationType= 'Application Sent' | 'Interview' | 'Rejected';


export interface ApplicationFrequency{
  date: string,
 'Application Sent': number,
 'Interview': number,
 'Rejected': number
}

export interface ApplicationFrequencySimple{
    name: ApplicationType,
    total: 980,
}