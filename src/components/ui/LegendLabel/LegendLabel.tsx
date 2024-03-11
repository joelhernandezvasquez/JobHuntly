import { ReactNode } from "react";
import style from './style.module.css';

interface Props{
 children:ReactNode;
 legendColor?:string;
}

const LegendLabel = ({children}:Props) => {
  return (
    <div>
     <ul className={style.label_list}>
        {children}
     </ul>
    </div>
  )
}

LegendLabel.LegentLabelItem = function LegentLabelItem ({children,legendColor}:Props){
    return(
        <li className={style.label_container}>
            <span style={{backgroundColor:legendColor}} className={style.label_dot}></span>
            {children}
        </li>
    )
}

export default LegendLabel