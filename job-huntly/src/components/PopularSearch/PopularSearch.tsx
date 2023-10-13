
import Link from "next/link";
import { PopularSearch } from "@/helper/interfaces/popularSearch";
import style from './style.module.css';

interface Props{
  popularSearch:PopularSearch []
}

const PopularSearch = ({popularSearch}:Props) => {
  return (
    <section className={style.popularSearch_wrapper}>
      <p className={style.popularSearch_headline}>Popular Search:</p>
      
      <ul className={style.popularSearch_list}>
       {popularSearch.map((item)=>{
        return (
           <li className={style.popularSearch_list_item} key={item.id}>
            {
              <Link href={`/joblist/${item.keyword}`}>{item.text}</Link>
            }
           </li>
         )
       })}
      </ul>
    </section>
  )
}

export default PopularSearch