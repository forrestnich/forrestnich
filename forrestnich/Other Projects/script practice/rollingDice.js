function rollDice(numSides) {
    for (var i = 1; i <= numRolls; i++)
    console.log(i, Math.ceil(Math.random() * numSides));
}
numRolls = prompt("How many times would you like to roll?")
numSides = prompt("What sided dice would you like to roll?")
rollDice(numSides)

