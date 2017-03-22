var gameChoice = window.prompt('What\'s your favorite video game?')

if (gameChoice === null) {
  var randomNumber = Math.random()
  if (randomNumber > 0.7) {
    window.alert('What! I don\'t play video games?')
  } else if (randomNumber > 0.3) {
    window.alert('Your life is so boring!')
  } else {
    window.alert('You are not my friend!')
  }
  var startLearnGame = window.confirm('Would you like to learn how to play video games with me?')
  if (startLearnGame === false) {
    window.alert('Uhh, I guess we could not be friend!')
  } else {
    var chooseGame = window.prompt('Choosing a game from below that you would like to play with me.\n Dota2 , League of Legends and CS:GO')
    if (chooseGame) {
      chooseGame = chooseGame.trim().toLowerCase()
      if (chooseGame === 'dota2') {
        window.alert('Nice choice dude! That is my favorite game!')
      } else if (chooseGame === 'league of legends' || chooseGame === 'lol') {
        window.alert('That is a good game to start!')
      } else if (chooseGame === 'cs:go') {
        window.alert('I like this game too.')
      } else {
        window.alert('Can you read properly? I said choose a game from below.')
      }
    } else {
      window.alert('We are done!')
    }
  }
} else {
  if (gameChoice) {
    gameChoice = gameChoice.trim().toLowerCase()
    var gameYear = window.prompt('How many years do you play?')
    gameYear = parseInt(gameYear)
    if (!isNaN(gameYear)) {
      if (gameYear <= 0) {
        window.alert(gameYear + ' years?')
      } else if (gameYear === 1) {
        window.alert('You play "' + gameChoice + '" for ' + gameYear + ' year. That is awesome.')
      } else {
        window.alert('You play "' + gameChoice + '" for ' + gameYear + ' years. That is awesome.')
      }
    } else {
      window.alert('Why not tell me? We are done!')
    }
  } else {
    window.alert('Please give me a name.')
  }
}
