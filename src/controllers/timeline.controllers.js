
import { getPostsDB } from "../repository/timeline.repotory.js"

export async function getAllPosts(req, res) {

    try {
        const { rows: posts } = await getPostsDB()
        if (posts.length === 0) { res.status(200).send("There are no posts yet") }

        res.status(200).send(posts)
    } catch (err) {
        res.status(500).send( err.message)
    }
}