import { createPostDB } from "../repository/posts.repositories.js";
// import urlMetadata from "url-metadata";
// import fetch from "node-fetch";

// globalThis.fetch = fetch
export async function createPost(req, res) {
    const { description, url } = req.body;

    const user = res.locals.user;
    try {
        // const metadata = await urlMetadata(url)
        // console.log(metadata)
        const post = await createPostDB(user.id, url, description);
        return res.sendStatus(201);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}