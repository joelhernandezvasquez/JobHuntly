export interface Contact{
    contactId:string,
    firstName:string,
    lastName:string,
    email:string,
    phone:string,
    role:string,
    notes?:string,
    company?:string,
    avatar?:string | null
}