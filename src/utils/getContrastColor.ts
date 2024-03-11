import { hexColor } from "@/types";

const PRIMARY_CLR = '#4640DE';
const ACCENT_GREEN_CLR = '#008000';
const WHITE_TEXT_CLR  = '#FFFFFF';
const BLACK_TEXT_CLR = '#000000';

export const getContrastColor = (hexColor:hexColor) => {

     if(hexColor === PRIMARY_CLR || hexColor === ACCENT_GREEN_CLR ){
        return WHITE_TEXT_CLR;
     }
     return BLACK_TEXT_CLR;
  }