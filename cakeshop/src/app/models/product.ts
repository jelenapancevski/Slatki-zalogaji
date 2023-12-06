import { Comment } from "./comment";


export class Product {
    _id: String;
    
    name:String;
    
    description:String;
    
    ingridients:Array<String>;

    image:String;
    
    price:number;
    
    type: String;       // torta/kolac
   
    comments:Array<Comment>;
}
