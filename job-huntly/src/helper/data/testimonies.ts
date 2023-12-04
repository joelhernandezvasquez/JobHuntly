import { Testimonies} from "../../interfaces/testimonials";
import Avatar1 from '../../../public/avatars/vicky-hladynets-C8Ta0gwPbQg-unsplash.jpg';
import Avatar2 from '../../../public/avatars/michael-dam-mEZ3PoFGs_k-unsplash.jpg';
import Avatar3 from '../../../public/avatars/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg';
import Avatar4 from '../../../public/avatars/jake-nackos-IF9TK5Uy-KI-unsplash.jpg';
import { v4 as uuidv4 } from 'uuid';

export const testimoniesArray:Testimonies [] = [
{
   id:uuidv4(),
   avatar:Avatar1,
   clientTestimony:'Alper Tornacy',
   testimonial:'Using JobHuntly has transformed my job search. It is intuitive, efficient, and keeps everything organized. Highly recommended!'  
},
{
   id:uuidv4(),
   avatar:Avatar2,
   clientTestimony:'Melter Karaham',
   testimonial:'it seamlessly integrates into my routine, making job hunting a breeze. Access from any device is a game-changer. Simplifies the entire process!'  
},
{
   id:uuidv4(),
   avatar:Avatar3,
   clientTestimony:'Vera Duncan',
   testimonial:'JobHuntly stands out with insightful analytics. It helped me refine my job search strategy. A must-have for optimizing your job hunt.'  
},
{
   id:uuidv4(),
   avatar:Avatar4,
   clientTestimony:'Samaheda Luzan',
   testimonial:'this web app saved me time with automated reminders. Smart automation lets me focus on preparing for interviews. A valuable tool for streamlining the job search.'  
}
]