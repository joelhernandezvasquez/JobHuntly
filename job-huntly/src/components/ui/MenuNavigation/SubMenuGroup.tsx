import useSubMenuContent from "../../../hooks/useSubMenuContent";
import { SubMenuContentKey } from "../../../interfaces/SubMenuContent";
import style from './style.module.css';

 interface Props{
    item:SubMenuContentKey
 }

const SubMenuGroup = ({item}:Props) => {
    const {subMenuContent} = useSubMenuContent();
  
    return (
    <div data-testid="submenu-content" className={style.submenu_wrapper}>
    { subMenuContent[item].headlineTitle &&
       <h2 className={style.submenu_wrapper_headline}>{subMenuContent[item].headlineTitle}</h2>}
    <ul>
      {
         subMenuContent[item].items.map((subItem,index)=>{
          return (
                  <li key={subItem.name} className={`${style.submenu_item} ${!subMenuContent[item].headlineTitle && index === 0 && style.submenu_item_top_border}`}>
                     <div className={style.submenu_item_header}>
                       {subItem.icon}
                       <p>{subItem.name}</p>  
                     </div>
                    
                     <p className={style.submenu_item_description}>{subItem.description}</p>
                  </li>
               )})
      }
    </ul>

  </div> 
  )
}

export default SubMenuGroup