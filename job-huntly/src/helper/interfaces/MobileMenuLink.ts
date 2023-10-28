import { SubMenuContentKey } from "./SubMenuContent";

export interface MobileMenuLinks {
    item:SubMenuContentKey | string,
    hasSubMenu:boolean
    url?:string
}