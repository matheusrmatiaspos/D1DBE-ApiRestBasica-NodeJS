module.exports = () => {
    const categoriesDB = require('../data/categories.json')
    const controller = {}

    controller.listCategories = (req,res) => {
        console.log(`${req.headers.host}${req.originalUrl} ${req.method}`);
        res.status(200).json(categoriesDB)
    }

    controller.categorie = (req,res) => {
        console.log(`${req.headers.host}${req.originalUrl} ${req.method}`);
        const {id} = req.params
        const categories = categoriesDB.categories.data
        const categorie = categories.find(categorie => categorie.id == id)

        res.status(200).json(categorie)
    }

    controller.insertCategorie = (req,res) => {
        console.log(`${req.headers.host}${req.originalUrl} ${req.method}`);
        console.log(req.body)
        categoriesDB.categories.data.push(req.body)
        res.status(200).json(req.body)
        
    }

    return controller
}