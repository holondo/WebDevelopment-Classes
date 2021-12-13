'use strict';

import mongoose from "mongoose"

const banner = mongoose.model('banner')


export async function put(req, res){
    const id = req.params.id
    try{
        await banner.findOneAndUpdate({
            _id: id,
            $set: {
                
            }
        })
        res.status(200).send({message:"Banner has been updated"})
    }
    catch(error){
        console.error(error)
        res.status(400).send({message: "Could not update banner"})
    }
}

export async function get(req, res){
    try{
        const findBanner = await banner.findOne()
        res.status(200).send(findBanner)
    }
    catch(error){
        console.error(error)
        res.status(400).send({message: "No active banner"})
    }
}

