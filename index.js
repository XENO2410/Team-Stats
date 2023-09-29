const team = {
  // Initialize empty arrays for players and games
  _players: [],
  _games: [],

  // Populate players array with three players
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this._players.push(player);
  },

  // Populate games array with three games
  addGame(opponent, teamPoints, opponentPoints) {
    const game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this._games.push(game);
  },

  // Create a getter method to retrieve players
  get players() {
    return this._players;
  },

  // Create a getter method to retrieve games
  get games() {
    return this._games;
  }
};

// Populate the players array with three players
team.addPlayer('John', 'Doe', 25);
team.addPlayer('Jane', 'Smith', 22);
team.addPlayer('Mike', 'Johnson', 28);

// Populate the games array with three games
team.addGame('Pak', 10, 5);
team.addGame('Aus', 15, 14);
team.addGame('Nz', 25, 21a);

team.addPlayer('Bugs', 'Bunny',76);
team.addGame('Titans',100,98);


console.log('Players:', team.players);
console.log('Games:', team.games);
