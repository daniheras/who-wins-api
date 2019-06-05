module.exports = {
    tag: 'anime',
    type: 'enhancer',
    effect: ( powerLevel ) => ({
        value: powerLevel * 2,
        message: '##rival## no ha podido plantar cara al anime, es una pena. ##character## gana esta batalla.'
    })
}

