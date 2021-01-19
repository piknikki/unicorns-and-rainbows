class Player {
  constructor(player) {
    this.id = player
    this.token = this.id === 'player1' ? '🦄' : '🌈'
    this.wins = 0
    this.winBoards = []
  }

  saveWinsToStorage() {
    // todo --> after doing this, add getItem to this.wins or maybe this.winBoards whatever works best
  }
}
