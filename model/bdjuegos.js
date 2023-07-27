//#1
const mongoose = requiere("mongoose");
const Schema = mongoose.Schema;

//# 2Crear representacion de los datos

let GameSchemaa = Schema({
  routeName: String,
  gameTitle: String,
  gameDescription: String,
  gameLaunch: String,
  gameDeveloper: String,
  gameMode: String,
});

// 3

module.exports = mongoose.model("bdjuegos", GameSchema);
