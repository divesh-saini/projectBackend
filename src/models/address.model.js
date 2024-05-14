import mongoose, {Schema, Types} from "mongoose";


const addressSchema = new Schema(
    {
        
        name: {
            type: String,
            required: true,
        },
        phone:{
            type: String,
            required: true,
        },
        
        house:{
            type: String,
            required: true,
        },
        
        street:{
            type: String,
            required: true,
        },
        
        city:{
            type: String,
            required: true,
        },
        
        state:{
            type: String,
            required: true,
        },
        
        pincode:{
            type: String,
            required: true,
        },
        
        landmark:{
            type: String,
            required: true,
        }
    }
)

export const Address = mongoose.model("Address", addressSchema)