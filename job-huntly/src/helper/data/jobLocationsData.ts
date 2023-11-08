import { v4 as uuidv4 } from 'uuid';

type ExperienceLevels = 'internship' | 'entryLevel' | 'associate' | 'midSeniorLevel' |'director' | 'executive';
interface ExperienceLevelOptions {
    id:string,
    typeExperience:ExperienceLevels,
    option:string,

  }

export const dropdownOptions:ExperienceLevelOptions [] = [
    {
      id:uuidv4(),
      typeExperience:'internship',
      option:'Internship'
    },
    {
      id:uuidv4(),
      typeExperience:'entryLevel',
      option:'Entry Level'
    },
    {
      id:uuidv4(),
      typeExperience:'associate',
      option:'Associate'
    },
    {
      id:uuidv4(),
      typeExperience:'midSeniorLevel',
      option:'Mid-Senior level'
    },
    {
      id:uuidv4(),
      typeExperience:'director',
      option:'Director'
    },
    {
      id:uuidv4(),
      typeExperience:'executive',
      option:'Executive'
    },
    
  ]