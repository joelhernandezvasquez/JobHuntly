import Button from "@/components/Button/Button";
import style from '../auth.module.css';

interface Props{
    defaultText:string, 
    loadingText:string,
    isProccesing:boolean
}

const AuthBtn = ({defaultText,loadingText,isProccesing}:Props) => {
  return (
   <Button type="primary" size="large" fullWidth 
   isDisabled={isProccesing}
   >
    {!isProccesing ? (
        <span>{defaultText}</span>
    ):
    <div className={style.auth_btn}>
      <div className={style.loader}></div>  
      <span> {loadingText}</span>
    </div>
    }
   
   </Button>
  )
}

export default AuthBtn