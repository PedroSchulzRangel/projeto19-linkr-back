import { db } from "../database/database.connection.js"

export function getUserByEmailDB(email) {
    return db.query(`SELECT * FROM users WHERE email=$1;`, [email])
}

export function searchForUserId(id){
    return db.query(`SELECT * FROM users WHERE id=$1;`,[id])
}

export function searchForUserPosts(id){
    return db.query(`SELECT u."pictureUrl", u.username, p.description, p."linkUrl", p.likes
        FROM posts p JOIN users u ON u.id=p."userId" WHERE p."userId"=$1`,[id])
}