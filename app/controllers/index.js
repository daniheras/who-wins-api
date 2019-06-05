const _ = require('lodash')

const indexControllers = {
    // Define here routes
}

module.exports = ( app, models ) => ({
    ...indexControllers,
    ...require('./battle')(app, models)
})