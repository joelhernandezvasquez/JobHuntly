import {ReactNode} from 'react';
import style from './style.module.css';

interface Props{
    children:ReactNode,
    heading:string,
    subHeading:string,
    additionalElement?:ReactNode
}
const TabsContent = ({children,heading,subHeading,additionalElement}:Props) => {
  return (
   <div className={style.tab_content_wrapper}>
    {children}
    
    <div className={style.slider_tab_body_content_container}>
          <h2 className={style.tab_content_heading}>{heading}</h2>
          <p className={style.tab_content_subheading}>{subHeading}</p>
         { additionalElement && <div className={style.children_element}>{additionalElement}</div>}
    </div>
   
   </div>
  )
}

export default TabsContent;