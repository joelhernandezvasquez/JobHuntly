
import {useState,useEffect} from 'react';

interface Props{
 media:string
}

const useMatchMedia = ({media}:Props) => {
 const [hasCurrentViewportMatch,setCurrentViewport] = useState<Boolean>(window.matchMedia(media).matches);

  useEffect(()=>{
  
    const handleResize = () =>{
      const mediaQuery = window.matchMedia(media);

        if(mediaQuery.matches){
           setCurrentViewport(true);
        }
        else{
          setCurrentViewport(false);
        }       
    }
    window.addEventListener('resize',handleResize); 

    return () =>{
      window.removeEventListener('resize',handleResize);
    }
  },[media])


return{
  hasCurrentViewportMatch
}
}

export default useMatchMedia