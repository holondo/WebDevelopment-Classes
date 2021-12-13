'use strict';

import mongoose from "mongoose"

const user = mongoose.model('user')

export async function del(req, res){
    const id = req.params.id;
    try{
        await user.findOneAndDelete({id: id},)
        res.status(200).send({message: "Delete successful"})
    }
    catch(error){
        console.error(error)
        res.status(400).send({message: "Cannot delete"})
    }
}

export async function get(req, res){
    try{
        const foundUsers = await user.find()
        res.status(200).send(foundUsers)
    }
    catch(error){
        console.error(error)
        res.status(400).send({message: "Could not find user"})
    }
}

export async function getByID(req, res){
    const id = req.params.id
    try{
        const foundUsers = await user.findOne({_id: id})
        res.status(200).send(foundUsers)
    }
    catch(error){
        console.error(error)
        res.status(400).send({message: "Could not find user"})
    }
}

export async function put(req, res){
    const id = req.params.id
    try{
        await user.findOneAndUpdate(
            {_id: id},
            {$set: {
                booksRead: req.body.booksRead,
                collections: req.body.collections,
                wishlist: req.body.wishlist,
                follows: req.body.follows,
                avatar: req.body.avatar,
                name: req.body.name,
                cart: req.body.cart
            }
        })
        res.status(200).send({message:"user has been updated"})
    }
    catch(error){
        console.error(error)
        res.status(400).send({message: "Could not update user"})
    }
}

export async function post(req, res){
    const newuser = new user(req.body)
    try {
        await newuser.save();        
        res.status(201).send({
            body: newuser
        })
    } catch (error) {
        console.error(error)
        res.status(400).send({message: "user was not inserted"})
    }
}

export async function login(req, res){
    const username = req.body.username
    try {
        let userLogin = await user.findOne({username: username});     
        console.log(userLogin)   
        res.status(201).send({
            body: userLogin
        })
    } catch (error) {
        console.error(error)
        res.status(400).send({message: "Could not find login"})
    }
}
