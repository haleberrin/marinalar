export interface NavSubItem {
    href:string;
    label:string;
}

export interface NavItemType {
    href:string;
    label:string;
    altmenu?:NavSubItem[]
}