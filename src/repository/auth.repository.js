import {db} from "../database/database.connection.js"

export function searchEmailFromDB (email){
    const selectEmail = db.query(`SELECT * FROM users WHERE email=$1;`,[email])
    return selectEmail
}

export async function insertNewUser(email, encryptedPassword, username, pictureUrl){
    await db.query(`INSERT INTO users
        (email,password,username,"pictureUrl")
        VALUES ($1,$2,$3,$4);`,[email, encryptedPassword, username, pictureUrl])
}
export async function deleteSession(token){
    await db.query(`DELETE from sessions WHERE token = ($1)`,[token])  
}