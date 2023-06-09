import { db } from "../database/database.connection.js";

export function getPostsDB() {
   return db.query(`SELECT posts.* , users.username, users."pictureUrl"  FROM posts 
   JOIN users ON users.id=posts."userId"
   ORDER BY "createdAt" DESC LIMIT 20;`)
}