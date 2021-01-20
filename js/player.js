class Player {
  constructor(player) {
    this.id = player
    this.token = this.id === 'player1' ? '🦄' : '🌈'
    this.tokenName = this.id === 'player1' ? 'uni' : 'rain'
    this.wins = 0
    this.winBoards = []
  }

  saveWinsToStorage() {
    // todo --> after doing this, add getItem to this.wins or maybe this.winBoards whatever works best
    localStorage.setItem(this.id, JSON.stringify(this.wins))
  }
}
