import { getPostsDB } from "../repository/timeline.repotory.js"

export async function getAllPosts(req, res) {

    try {
        const { rows: posts } = await getPostsDB()
        if (posts.length === 0) { res.status(200).send("There are no posts yet") }

        res.status(200).send(posts)
    } catch (err) {
        res.status(500).send("An error occured while trying to fetch the posts, please refresh the page", err.message)
    }

}