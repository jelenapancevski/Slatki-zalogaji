

export class Product {
    _id: String;
    
    name:String;
    
    description:String;
    
    ingridients:Array<String>;

    image:String;
    
    price:Number;
    
    type: String;       // torta/kolac
   
    comments:Array<Comment>;
}
