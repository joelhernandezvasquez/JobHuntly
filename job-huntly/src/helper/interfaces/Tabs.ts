import { StaticImageData } from "next/image";

export interface TabsItem{
    id:string,
    item:string,
    content:{
        title:string,
        description:string,
        illustration?:StaticImageData
    }
}