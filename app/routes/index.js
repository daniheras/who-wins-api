const indexRoutes = [
    // Define here routes
]

module.exports = ( app, controllers ) => [].concat(indexRoutes, [
    require('./misc')(app, controllers),
    require('./battle')(app, controllers),
])