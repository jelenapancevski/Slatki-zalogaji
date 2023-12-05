
import { ObjectId } from "mongodb";
import mongoose from "mongoose"

const Schema = mongoose.Schema;
let Order = new Schema({
    buyer: {
        type:ObjectId 
    },
    products: [ 
       {
        productid:{
            type:ObjectId
        },
        amount:{          
            type:Number
        }
       }
    ],
    
    date :{
        type:Date
    },
    status: {
        type:String // pending, accepted, denied
    },
    notified:{
        type:Boolean
    }
});

export default mongoose.model('Order',Order,'orders');
