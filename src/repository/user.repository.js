import { db } from "../database/database.connection.js"

export function getUserByEmailDB(email) {
    return db.query(`SELECT * FROM users WHERE email=$1;`, [email])
}