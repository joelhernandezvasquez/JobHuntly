type LocationOptions = {
    id:string,
    option:string
  }

export const dropdownOptions:LocationOptions [] = [
    {
      id:crypto.randomUUID(),
      option:'Florence, Italy'
    },
    {
      id:crypto.randomUUID(),
      option:'Barcelona, Spain'
    },
    {
      id:crypto.randomUUID(),
      option:'New York, NY'
    },
    {
      id:crypto.randomUUID(),
      option:'Bronx, NY'
    }
  ]