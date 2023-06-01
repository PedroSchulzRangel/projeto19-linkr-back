import { db } from "../database/database.connection.js"

export async function sigIn(req, res) {

    const { email, password } = req.body
    try {
        await db.query(`INSERT INTO sessions (email, password) VALUES ($1,$2);`,[email, password])
        res.status(200).send("deubom")
    } catch (err) {
        res.status(500).send(err.message)
    }
}