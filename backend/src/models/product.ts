
import { Decimal128, Double, ObjectId } from "mongodb";
import mongoose from "mongoose"

const Schema = mongoose.Schema;
let Product = new Schema({
    ingridents: [
        {
            type: String
        }
    ],
    name: {
        type: String
    },

    description: {
        type: String
    },

    type: {
        type: String
    },

    image: {
        type: String
    }
    ,
    price: {
        type: Number
    },

    comments: [
        {
            username: {
                type: ObjectId
            },
            comment: {
                type: String
            },
            /*review:{
                type:Number
            },*/
            date: {
                type: Date
            },
            /*  edited:{
                  type:Boolean
              }*/
        }
    ]
});

export default mongoose.model('Product', Product, 'products');
