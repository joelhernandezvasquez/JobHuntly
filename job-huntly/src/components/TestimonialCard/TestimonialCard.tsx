import { Testimonies } from "@/helper/interfaces/testimonials";
import Avatar from "../Avatar/Avatar";
import {IoStarSharp } from "react-icons/io5";
import { v4 as uuidv4 } from 'uuid';
import style from './style.module.css';

interface Props{
 testimony:Testimonies
}

const starsArray = 
[
{id:uuidv4()},{id:uuidv4()},{id:uuidv4()},{id:uuidv4()},{id:uuidv4()}
]

const TestimonialCard = ({testimony}:Props) => {
  const {clientTestimony,testimonial,avatar} = testimony;
    return (
    <div data-testid="testimony-card" className={style.testimony_card}>
       <Avatar imageSource={avatar} size={'medium'}/>
        <span className={style.client_testimony}>{clientTestimony}</span>
        <p className={style.testimonial}>{testimonial}</p>
        
        <div className={style.testimony_card_stars}>
        {starsArray.map(({id})=>{
          return  <IoStarSharp key={id} size={25} color={'#4640DE'}/>
        })}
        </div>
       
    </div>
  )
}

export default TestimonialCard