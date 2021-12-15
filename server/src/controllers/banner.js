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
        const findBanner = await banner.findOne().sort({ _id: -1 })
        res.status(200).send(findBanner)
    }
    catch(error){
        console.error(error)
        res.status(400).send({message: "No active banner"})
    }
}

export async function post(req, res){
    const newBanner = new banner(req.body)
    try {
        await newBanner.save();        
        res.status(201).send({
            body: newBanner
        })
    } catch (error) {
        console.error(error)
        res.status(400).send({
            message: "Banner was not created"})
    }
}

