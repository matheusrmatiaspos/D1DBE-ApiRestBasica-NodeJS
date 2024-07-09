module.exports = app => {
    const controller = require('../controllers/users')()

    app.route('/usuarios').get(controller.listUsers)
    app.route('/usuario/:id').get(controller.user)
    app.route('/usuarios').post(controller.insertUser)
}