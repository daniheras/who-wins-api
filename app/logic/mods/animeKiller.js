module.exports = {
    mod: 'animeKiller',
    effect: ( rivalMods, rivalPowerLevel, characterPowerLevel ) => {
        if ( rivalMods.indexOf( 'anime' ) > 0 )
            return {
                message: '##character## no tolera el anime, ha destrozado a ##rival##',
                rivalPowerLevel: 0,
                characterPowerLevel: characterPowerLevel
            };
    }
}

