

export const filterLastItems = <T>(array:T[],lengthToFilter:number):T[] =>{
   return array.toReversed().slice(0,lengthToFilter);
}