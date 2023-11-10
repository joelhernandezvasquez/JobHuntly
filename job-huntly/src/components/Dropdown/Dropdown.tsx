
import { useState} from 'react';
import useToogle from '@/hooks/useToogle';
import { DropdownOptions, variant } from './interface';
import style from './style.module.css';

interface Props {
  options: DropdownOptions[],
  defaultValue?: string,
  variant?: variant,
  onSelectOptionCallback: (option: string) => void
}

const Dropdown = ({ options, variant, defaultValue, onSelectOptionCallback }: Props) => {

  const currentOptionValue = defaultValue ? defaultValue : options[0].option;
  const [currentOption, setCurrentOption] = useState(currentOptionValue);
  const { isToggle, handleToggle } = useToogle();

  const onSelectOption = (option: string) => {
    setCurrentOption(option);
    handleToggle();
    onSelectOptionCallback(option);
  }

  return (
    <div className={`${style.dropdown_wrapper} ${variant === 'bordered' && style.bordered}`}>

      <div role='button' className={style.dropdown_header} onClick={handleToggle}>
        <span>{currentOption}</span>
        <svg className={`${isToggle && style.down_arrow_icon}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M12.6666 5.6665L7.99992 10.3332L3.33325 5.6665" stroke="#7C8493" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>

      <div className={`${style.dropdown_body} ${isToggle && style.show_dropdown}`}>
        <ul>
          {options.map(({ id, option }) => {
            return currentOption !== option && 
            <li key={id} className={style.option_item} 
                onClick={() => onSelectOption(option)}> 
                {option} 
            </li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Dropdown