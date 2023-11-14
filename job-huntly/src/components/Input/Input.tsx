
'use client';

import { Dispatch, SetStateAction,useRef } from "react";
import ErrorMessage from "../Error/ErrorMessage";
import style from './style.module.css';

interface Props {
  id: string,
  name: string,
  defaultValue: string,
  placeholder?: string,
  errorMessage?: string,
  isInvalid?: boolean,
  onValuedChange: Dispatch<SetStateAction<string>>,
  iconSearch?: boolean,
}
const Input = ({ id, name, placeholder, defaultValue, errorMessage, isInvalid, onValuedChange, iconSearch }: Props) => {
  
  const inputContainerRef = useRef<HTMLDivElement | null>(null);

  const onFocusInputContainer = () =>{
    if(!isInvalid)
     inputContainerRef.current?.classList.add(style.input_container_focus);
  }

  const onBlurInputContainer = () =>{
    inputContainerRef.current?.classList.remove(style.input_container_focus);
  }

  return (
  
     <div className={style.input_container} 
      ref={inputContainerRef} 
      onBlur={onBlurInputContainer}>
     
      <div className={`${style.input_container_field} ${isInvalid && style.input_container_field_error_state}`}>

        {iconSearch && (<svg className={style.icon_search} xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
          <circle cx="11.7666" cy="12.2664" r="8.98856" stroke="#A8ADB7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M18.0183 18.9849L21.5423 22.4997" stroke="#A8ADB7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>)
        }
        <input
          className={style.input_wrapper}
          type="text"
          id={id}
          name={name}
          value={defaultValue}
          onChange={(event) => onValuedChange(event.target.value)}
          onFocus={onFocusInputContainer}
          placeholder={placeholder}
        />

      </div>
      {isInvalid && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  )

}

export default Input