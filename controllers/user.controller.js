const { signedCookie } = require('cookie-parser');
const userController = require('../controllers/user.controller')
const User = require('../models/User')

var express = require('express');
var router = express.Router();



const getAll =  async (req, res) => {

    try {

        const usuarios = await User.find()

        return res.status(200).json(usuarios)

    } catch (error) {
        return res.status(404).json(error)

    }
    

}

const createUser = async (req, res) => {
    try {
        const { name, dni } = req.body;
        console.log(name)

        if (name && dni) {
            const newUser = new User({ name, dni })
            let existe = await User.exists({ dni: req.body.dni })
            console.log(existe)

            if (!existe) {
                console.log("entro al IF 2")
                await newUser.save()
                res.status(200)
                res.json(req.body)

            } else {
                res.status(400).json({ msj: "Ya existe usuario con DNI " + req.body.dni })
            }

        } else {
            res.json({ isOk: false, msj: "Los datos son requeridos" })
            res.send("algo")
        }

    } catch (error) {
        res.json(error)
        res.status(404)
    }
}

const deleteUser = async (req, res) => {

    try {
        const dniUser = parseString(req.params.dni)
        console.log(dni)
        
            let existe = await User.exists({ dni: dni })
            console.log(existe)

            if (existe) {

                await User.deleteOne({dni : dniUser })                
                res.status(200)               

            }

    } catch (error) {
        console.log("error")
        res.json(error)
        res.status(404)
    }
}

module.exports = {getAll,createUser,deleteUser}