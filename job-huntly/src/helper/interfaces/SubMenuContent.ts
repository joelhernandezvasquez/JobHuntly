
export type SubMenuContentKey = "product" | "solutions" | "plans";

export type Items = {
    name:string,
    description:string,
    icon?:React.ReactNode
}

export type MenuItem = {
    headlineTitle?:string
    items: Items []
}

export type LinkUrl = {
  linkUrl:string
}

export interface SubMenuContent {
  product:MenuItem,
  solutions:MenuItem,
  plans:MenuItem,
}