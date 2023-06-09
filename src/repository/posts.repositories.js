import { db } from "../database/database.connection.js";

export async function createPostDB(userId, linkUrl, description){
    const results = await db.query(`INSERT INTO "posts" ("userId", "linkUrl", "description") VALUES ($1, $2, $3) RETURNING id;`, [userId, linkUrl, description]);
    return results;
}

export async function deletePostDB(params, userId) {
    const { postId } = params;
    const results = await db.query(`DELETE FROM posts WHERE id=$1 AND "userId"=$2;`, [postId, userId]);
    return results
}
export function editPostDB(id, description) {
	const results = db.query(`UPDATE postsSET description = $1 WHERE id = $2 RETURNING *;`, [description, id]);
    return results
}
