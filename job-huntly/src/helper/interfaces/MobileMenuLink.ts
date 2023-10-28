import { SubMenuContentKey } from "./SubMenuContent";

export interface MobileMenuLinks {
    item:SubMenuContentKey,
    hasSubMenu:boolean
    url?:string
}