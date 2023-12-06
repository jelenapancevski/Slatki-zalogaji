
import { User } from "./user";

export class Order {
    _id: String;
    buyer: String;
    products: Array<Object>;
    date:Date;
    status:String; // pending, accepted, denied
    notified:Boolean;
    _user:User;
    totalprice;
}

