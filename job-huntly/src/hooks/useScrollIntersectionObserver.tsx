import { useEffect, useRef } from "react";

const useScrollIntersectionObserver = <T extends HTMLElement>(handleState:(index:number) => void) => {
  
  const observerRef = useRef<T | null >(null);
    
  useEffect(()=>{
    let scrollTimeout: number;
    let observer: IntersectionObserver | null = null;

    const handleObserver = () =>{
        clearTimeout(scrollTimeout);

        scrollTimeout = window.setTimeout(()=>{
           if(observer){
             observer.disconnect()
           }
         observer = new IntersectionObserver((entries) =>{
            entries.forEach((entry) => {
              
                if (entry.isIntersecting) {
                  const slideIndex = Array.from(observerRef.current!.children).indexOf(entry.target);
                  handleState(slideIndex);
                }
              });
            },
              { threshold: 1 }
            )
            Array.from(observerRef.current!.children).forEach((child) => {
                observer!.observe(child);
              });

        },500)
    }

    if(observerRef.current){
       observerRef.current.addEventListener('scroll',handleObserver);
      }

      return () =>{
        observerRef.current?.removeEventListener('scroll',handleObserver);
        
        if (observer) {
            observer.disconnect();
          }
      }

  },[handleState])
  return {
   observerRef
  }
  
}

export default useScrollIntersectionObserver;