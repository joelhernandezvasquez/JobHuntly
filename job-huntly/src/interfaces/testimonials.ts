import { StaticImageData } from "next/image";

export interface Testimonies{
 id:string,
 avatar:StaticImageData,
 clientTestimony:string,
 testimonial:string
}