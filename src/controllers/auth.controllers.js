import { searchEmailFromDB, insertNewUser, createSessionDb, deleteSession } from "../repository/auth.repository.js"
import { getUserByEmailDB } from "../repository/user.repository.js";

import bcrypt from "bcrypt";
import {v4 as uuid} from "uuid";

export async function signIn(req, res) {
    //userId e token
    const { email, password } = req.body
    try {

        const user = await getUserByEmailDB(email)
        console.log(user.rows)

        if (user.rowCount === 0) return res.status(401).send({ message: "E-mail não cadastrado!" })

        const correctPassword = bcrypt.compareSync(password, user.rows[0].password)
        if (!correctPassword) return res.status(401).send({ message: "Senha incorreta!" })

        const token = uuid()
        await createSessionDb(user.rows[0].id, token)
        res.status(200).send({ token })
        

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function signUp(req, res) {

    const { email, password, username, pictureUrl } = req.body

    try {
        const emailAlreadyInUse = await searchEmailFromDB(email)

        if (emailAlreadyInUse.rowCount !== 0) return res.status(409).send("Este email já está cadastrado");

        const encryptedPassword = bcrypt.hashSync(password, 10)

        insertNewUser(email, encryptedPassword, username, pictureUrl)

        res.sendStatus(201)

    } catch (err) {
        res.status(500).send(err.message)
    }
}
export async function Logout(req,res){
    const {token}=res.locals.session
    try{
        deleteSession(token)
        res.sendStatus(200)
    }
    catch(err){
        res.status(500).send(err.message)
    }
}