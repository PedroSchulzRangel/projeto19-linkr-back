import { db } from "../database/database.connection.js";

export async function createPostDB(userId, url, description){
<<<<<<< Updated upstream
    const results = db.query(`INSERT INTO "posts" ("userId", "url", "description") VALUES ($1, $2, $3) RETURNING id;`, [userId, url, description]);
=======
    const results = db.query(`INSERT INTO "posts" ("userId", "linkUrl", "description") VALUES ($1, $2, $3);`, [userId, url, description]);
>>>>>>> Stashed changes
    return results;
}