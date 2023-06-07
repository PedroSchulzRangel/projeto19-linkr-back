import { searchEmailFromDB, insertNewUser,deleteSession} from "../repository/auth.repository.js"
import bcrypt from "bcrypt";

export async function sigIn(req, res) {

    const { email, password } = req.body
    try {

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function signUp (req, res) {

    const {email, password, username, pictureUrl} = req.body

    try{
        const emailAlreadyInUse = await searchEmailFromDB(email)

        if(emailAlreadyInUse.rowCount !== 0) return res.status(409).send("Este email já está cadastrado");

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