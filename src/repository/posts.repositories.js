import { db } from "../database/database.connection.js";

export async function createPostDB(userId, url, description){
    const results = db.query(`INSERT INTO "posts" ("userId", "url", "description") VALUES ($1, $2, $3) RETURNING id;`, [userId, url, description]);
    return results;
}