module.exports = app =>{
    const controller = require('../controllers/categories')()

    app.route('/categorias').get(controller.listCategories)

    app.route('/categoria/:id').get(controller.categorie)

    app.route('/categorias').post(controller.insertCategorie)
}