import {useState} from 'react'

const useLoader = () => {
  const [isLoading,setLoading] = useState(false)
   
   const initLoader = () =>{
    setLoading(true);
   }

   const stopLoader = () =>{
     setLoading(false);
   }

  return{
     isLoading,
     initLoader,
     stopLoader,
    }
}

export default useLoader