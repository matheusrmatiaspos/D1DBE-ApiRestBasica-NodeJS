module.exports = () => {
    const usersDB = require('../data/users.json')
    const controller = {}

    controller.listUsers = (req,res) => {
        console.log(`${req.headers.host}${req.originalUrl} ${req.method}`);
        res.status(200).json(usersDB)
    }

    controller.user = (req,res) => {
        console.log(`${req.headers.host}${req.originalUrl} ${req.method}`);
        const {id} = req.params
        const users = usersDB.users.data
        const user = users.find(user => user.id == id)

        res.status(200).json(user)
    }

    controller.insertUser = (req,res) => {
        console.log(`${req.headers.host}${req.originalUrl} ${req.method}`);
        console.log(req.body)
        usersDB.users.data.push(req.body)
        res.status(200).json(req.body)
    }

    return controller
}