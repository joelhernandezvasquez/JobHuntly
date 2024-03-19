import {ReactNode }from 'react';

interface Props{
    children:ReactNode
}

export const DashboardInterviewsWrapper = ({children}:Props) => {
  return (
   <>
    {children}
   </>
  )
}
