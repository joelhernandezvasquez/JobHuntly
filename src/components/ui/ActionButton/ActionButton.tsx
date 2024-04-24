'use client';

interface Props{
    className:string,
    callback:() => void
}
export const ActionButton = ({className,callback}:Props) => {
  return (
    <button className={className} onClick={callback}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}
