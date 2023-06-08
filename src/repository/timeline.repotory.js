import { db } from "../database/database.connection.js";

export function getPostsDB() {
   return db.query(`SELECT * FROM posts ORDER BY "createdAt" DESC LIMIT 20;`)
}