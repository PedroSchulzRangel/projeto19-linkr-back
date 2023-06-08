import { createPostDB, deletePostDB, editPostDB } from "../repository/posts.repositories.js";


export async function createPost(req, res){
    const {description, url} = req.body;
    const user = res.locals.user;
    try {
        await createPostDB(user.id, url, description);
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
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

export async function editPost(req,res){
    const { description } = req.body;
    const { id } = req.params;
    const user = res.locals.user;
    try {
        await editPostDB(description, id);
        res.sendStatus(200)
    } catch (error) {
        return res.status(500).send(error.message);
    }    
}
