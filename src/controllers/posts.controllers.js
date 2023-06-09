import { createPostDB, deletePostDB, editPostDB } from "../repository/posts.repositories.js";
// import urlMetadata from "url-metadata";
// import fetch from "node-fetch";

// globalThis.fetch = fetch

export async function createPost(req, res){
    const {description, linkUrl, userId} = req.body;
    try {
        await createPostDB(userId, linkUrl, description);
        return res.sendStatus(201);        
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

export async function deletePost(req, res){
    const user = res.locals.user;
    try {        
         await deletePostDB(req.params,user.id);
        res.sendStatus(200);
    } catch (err) {
        return res.status(500).send(err.message);
    }
}

export async function editPost(req,res){
    const { description } = req.body;
    const { id } = req.params;
    try {
        await editPostDB(description, id);
        res.sendStatus(200)
    } catch (err) {
        return res.status(500).send(err.message);
    }    
}
