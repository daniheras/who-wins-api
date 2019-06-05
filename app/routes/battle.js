module.exports = (app, controllers) => {
    app.use('/api/characters/random', (req, res) => controllers.randomCharacters(req,res))
}