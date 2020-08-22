'use strict'
const scriptCreateBet = (bet) => {
  const { idBet, isRed, isBlack, betNumber, money, idroulette, userid } = bet
  return `
  INSERT INTO bet_on_roulette(idbet, isred, isblack, number_bet, money, userid, idroulette)
  VALUES (${+idBet}, ${Boolean(isRed)}, ${Boolean(isBlack)}, ${betNumber}, ${+money}, '${userid}', ${+idroulette})
  `
}
module.exports = {
  scriptCreateBet
}
