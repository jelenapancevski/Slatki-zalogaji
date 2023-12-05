
import mongoose from "mongoose"

const Schema = mongoose.Schema;
let Promotion = new Schema({
    name: {
        type:String 
    },
    description: {
        type:String 
    },
    image: {
        type: String
    }
});

export default mongoose.model('Promotion',Promotion,'promotions');
