'use strict';

var objects = {}

export function del(req, res){
    const key = req.params.key;
    delete objects[key];
    console.log("Objects: ", objects)
    res.status(200).send();
}

export function get(req, res){
    const key = req.params.key
    let found = objects[key]

    if(found == null){
        found = ''
    }
    res.status(200).send({
        body : found 
    })
}

export function post(req, res){
    const key = req.params.key
    //console.log("Key= ", key, "\nBody= ", typeof(req.body))
    objects[key] = req.body
    console.log("Objects: ", objects)
    res.status(201).send({
        id: key,
        body: req.body
    })
}