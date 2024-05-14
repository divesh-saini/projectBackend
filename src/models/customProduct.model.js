import mongoose from "mongoose"
import { Schema } from "mongoose"

const customProduct = new Schema({
    
    size:{
        type : String,
        required:true,
    },
    Image:{
        type : String,
        required: true,
    }
    
})
