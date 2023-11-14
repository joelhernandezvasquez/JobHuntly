'use client';

import { useState,useRef,useEffect} from 'react';
import { TabsSlider } from '@/helper/interfaces/Tabs';
import style from './style.module.css';

interface Props{
 tabsItem: TabsSlider[]
}

const SliderTabs = ({tabsItem}:Props) => {

    const [selectedTab, setSelectedTab] = useState(0);
    const gridContainerRef = useRef<HTMLUListElement>(null);

    const handleSeletedTab = (tabIndex: number) => {
      setSelectedTab(tabIndex);
        if(gridContainerRef.current){
          const slideWidth = gridContainerRef.current.children[0].clientWidth;
          const newPos = tabIndex * slideWidth;
          gridContainerRef.current.scrollLeft = newPos;
        }  
    }

    useEffect(()=>{
      let scrollTimeout: number;
      let observer: IntersectionObserver | null = null;

       const handleSliderTabScroll = () =>{
        console.log('scroll');
        clearTimeout(scrollTimeout);

        scrollTimeout  = window.setTimeout(()=>{
          if (observer) {
            observer.disconnect();
          }

          observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
              
                if (entry.isIntersecting) {
                 
                  const slideIndex = Array.from(gridContainerRef.current!.children).indexOf(entry.target);
                  console.log(slideIndex);
                  setSelectedTab(slideIndex);
                }
              });
            },
            { threshold: 1 } // Adjust the threshold based on your needs
          );
          Array.from(gridContainerRef.current!.children).forEach((child) => {
            console.log('enter')
            observer!.observe(child);
          });
          
          
        },1000)

        
      }

       if(gridContainerRef.current){
         gridContainerRef.current.addEventListener('scroll',handleSliderTabScroll)
       }

      return ()=>{
        gridContainerRef.current?.removeEventListener('scroll',handleSliderTabScroll);
      
        if (observer) {
          observer.disconnect();
        }
      }
    },[])

  return (
    <div className={style.slider_tabs_wrapper}>

      <ul  className={style.slider_tabs_grid} ref={gridContainerRef}>
        {tabsItem.map((tabItem,index)=>{
            return <li key={tabItem.id}
                    className={`${style.slider_tabs_item} ${index=== selectedTab&& style.active_slider_tab}`}
                    onClick={() => handleSeletedTab(index)}
                   >
                    
                     {tabItem.item}
                     <p>{tabItem.description}</p>
                    </li>
        })}
      </ul>  
    </div>
  )
}

export default SliderTabs