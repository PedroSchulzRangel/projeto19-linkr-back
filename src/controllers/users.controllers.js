import { searchForUserId, searchForUserPosts, searchForUserName} from "../repository/user.repository.js"

export async function getUserById (req, res){
    
    const {id} = req.params

    try{
        const {rows: userIdExists} = await searchForUserId(id)

        if (!userIdExists) return res.status(404).send("O usuário procurado não existe");

        const {rows: userPosts} = await searchForUserPosts(id)

        res.status(200).send(userPosts)

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getUsersByName(req,res){
    const {username}=req.params
    try{
        const searchedUsers = await searchForUserName(username)
        res.status(200).send(searchedUsers)
    }
    catch(err){
        res.status(500).send(err.message)
    }
}