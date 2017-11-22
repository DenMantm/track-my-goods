export interface IUser{
    id:number;
    userName:string;
    firstName:string;
    lastName:string;
    email:string;
    appSettings:{colourScheme:string,
                 navbarColourScheme:Object,
                 stayAlive:boolean};
}