export async function sigIn(req, res) {

    const { email, password } = req.body
    try {

    } catch (err) {
        res.status(500).send(err.message)
    }
}