'use client';

// TODO:clean up the the component
// TODO: Understand the logic of the component

import { useState,useRef,useEffect} from 'react';
import { TabsSlider } from '@/helper/interfaces/Tabs';
import style from './style.module.css';
import Image from 'next/image';
import Link from 'next/link';
import useFeaturesIcon from '@/hooks/useFeaturesIcon';
import { IoChevronForwardOutline } from 'react-icons/io5';

interface Props{
 tabsItem: TabsSlider[]
}

const SliderTabs = ({tabsItem}:Props) => {

    const [selectedTab, setSelectedTab] = useState(0);
    const gridContainerRef = useRef<HTMLUListElement>(null);
    const {featuresIcon} = useFeaturesIcon();

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
                  setSelectedTab(slideIndex);
                }
              });
            },
            { threshold: 1 }
          );
          Array.from(gridContainerRef.current!.children).forEach((child) => {
            observer!.observe(child);
          });
           
        },500)
 
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

      <ul className={style.slider_tabs_grid} ref={gridContainerRef}>
        {tabsItem.map((tabItem, index) => {
          return <li key={tabItem.id}
            className={`${style.slider_tabs_item} ${index === selectedTab && style.active_slider_tab}`}
            onClick={() => handleSeletedTab(index)}
          >
            <p className={style.features_icon}>{featuresIcon[index].icon}</p>
            <div>
            <h3 className={style.slider_tabs_headline}>{tabItem.item}</h3>
            <p className={style.slider_tabs_description}>{tabItem.description}</p>
            <Link className={style.slider_tabs_link}  href=''> Learn More <IoChevronForwardOutline size={16}/> </Link>
            </div>
            
          </li>
        })}
      </ul>

      <div className={style.slider_tab_body}>
        <Image
        className={style.slider_tab_body_illustration}
        src={tabsItem[selectedTab].illustration}
        width={300}
        height={300}
        alt={`Illustration of ${tabsItem[selectedTab].item}`}
        />
        <div className={style.slider_tab_body_content_container}>
          <h2 className={style.slider_tab_body_header}>{tabsItem[selectedTab].heading}</h2>
          <p className={style.slider_tab_body_content}>{tabsItem[selectedTab].subHeading}</p>
        </div>
        
      </div>
    </div>
  )
}

export default SliderTabs