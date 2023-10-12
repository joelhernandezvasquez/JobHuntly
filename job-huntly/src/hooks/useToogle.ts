import {useState} from 'react';

const useToogle = () => {
 const [isToggle,setIsToggle] = useState(false);

 const handleToggle = () =>{
  setIsToggle(!isToggle);
 }

 return {
  isToggle,
  handleToggle
 }
}

export default useToogle;