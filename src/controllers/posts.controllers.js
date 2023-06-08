import { createPostDB } from "../repository/posts.repositories.js";


export async function createPost(req, res){
    const {description, url} = req.body;
    const user = res.locals.user;
    try {
        const post = await createPostDB(user.id, url, description);
        return res.sendStatus(201);        
    } catch (error) {
        return res.status(500).send(error.message);
    }
}