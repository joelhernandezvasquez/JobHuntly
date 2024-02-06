import { ReactNode } from 'react';
import style from './style.module.css';

interface Props{
    children:ReactNode
}

const BenchMarkWidget = ({children}:Props) => {
  return (
    <article className={style.bench_mark_wrapper}>
      {children}
    </article>
  )
}

BenchMarkWidget.Header = function BenchMarkWidgetHeader ({children}:Props){
  return (
    <div className={style.bench_mark_header}>
     {children}
    </div>
  )
}

BenchMarkWidget.Body = function BenchMarkWidgetBody ({children}:Props){
    return (
        <div className={style.bench_mark_body}>
         {children}
        </div>
      )
}



export default BenchMarkWidget