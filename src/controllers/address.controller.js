import { Address } from "../models/address.model.js";

const addAddress = async(req,res)=>{
    const {id} = req.user

    const address = new Address();
}