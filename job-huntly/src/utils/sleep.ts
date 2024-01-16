
export const sleep = (timer:number) =>{
 return new Promise((resolve=>{
   setTimeout(() => {
    resolve(true)
   }, timer);
 })
 )}
