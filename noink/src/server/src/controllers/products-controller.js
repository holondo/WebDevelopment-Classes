'use strict';
import mongoose from "mongoose"
const product = mongoose.model('product')
var objects = {}

export async function del(req, res){
    const id = req.params.id;
    try{
        await product.findOneAndDelete({_id: id},)
        res.status(200).send({message: "Delete successful"})
    }
    catch(error){
        res.status(400).send({message: "Cannot delete"})
    }
}

export async function get(req, res){
    try{
        const foundProducts = await product.find()
        res.status(200).send(foundProducts)
    }
    catch(error){
        res.status(400).send(error)
    }
}

export async function getByID(req, res){
    const id = req.params.id
    try{
        const foundProducts = await product.findOne({_id: id})
        console.log(foundProducts)
        res.status(200).send(foundProducts)
    }
    catch(error){
        res.status(400).send(error)
    }
}

export async function put(req, res){
    const id = req.params.id
    try{
        await product.findOneAndUpdate({
            _id: id,
            $set: {
                name: req.body.title,
                price: req.body.price,
                type: req.body.type,
                img_src: req.body.img_src,
                description: req.body.description
            }
        })
        res.status(200).send({message:"Product has been updated"})
    }
    catch(error){
        res.status(400).send({message: error})
    }
}

export async function post(req, res){
    const newProduct = new product(req.body)
    try {
        await newProduct.save();        
        res.status(201).send({
            body: newProduct
        })
    } catch (error) {
        res.status(400).send({
            message: "Product was not inserted",
            error: error
        })
    }
}