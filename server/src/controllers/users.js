'use strict';

import mongoose from "mongoose" // db instance
import bcrypt from "bcrypt";

const user = mongoose.model('user') // model
const saltRounds = 10;

// Delete user by id
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

// Get users list
export async function get(req, res){
    try{
        let foundUsers = await user.find()
        foundUsers.forEach(element => {
            delete element.password
        });
        res.status(200).send(foundUsers)
    }
    catch(error){
        console.error(error)
        res.status(400).send({message: "Could not find user"})
    }
}

// Get user by id
export async function getByID(req, res){
    const id = req.params.id
    try{
        let foundUsers = await user.findOne({_id: id})
        delete foundUsers.password
        res.status(200).send(foundUsers)
    }
    catch(error){
        console.error(error)
        res.status(400).send({message: "Could not find user"})
    }
}

// Update user by id
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

// Create new user
export async function post(req, res){
    let newuser = new user(req.body)
    console.log("Criando user", newuser)
    try {
        bcrypt.hash(newuser.password, saltRounds, async function(err, hash) {
            newuser.password = hash
            await newuser.save();        
            res.status(201).send({
                body: newuser
            })
        });
    } catch (error) {
        console.error(error)
        res.status(400).send({message: "user was not inserted"})
    }
}

// Login user
export async function login(req, res){
    console.log("Body:", req.body)
    const username = req.body.username
    const password = req.body.password
    try {
        let userLogin = await user.findOne({username: username});     

        if (userLogin !== null) {
            console.log("Userlogin:", userLogin)
            bcrypt.compare(password, userLogin.password, function (err, isMatch) {
                if (isMatch){
                    res.status(201).send({
                        body: userLogin
                    })
                }else{
                    res.status(400).send({body:{}})
                }
            })
        }
        else{
            throw 'Wrong username'
        }
        
    } catch (error) {
        console.error("Parou?????", error)
        res.status(400).send({message: "Could not find login"})
    }
}
