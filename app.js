//BDD MONGO
const mongoose = require("mongoose");
require("dotenv").config();

const JG = require("./model/bdjuegos");

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((e) => console.log("MongoDB ready"))
  .catch(console.error);

//console.log(process.env.DB_CONNECTION);

//1 Importar la libreria
const express = require("express");

// 2 Instanciar express
const app = express();

// 3 Iniciar servidor
const PORT = 5000;
app.listen(PORT, function () {
  console.log("Servidor iniciado en puerto 5000");
});

const cors = require("cors");
// cross- Origin Resource Sharing
app.use(cors());
//set up the express app to handle parsing- dejar que otro sistema haga uso del API
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//bandera que activa capacidad de usar json
app.use(express.json());

//DATA
//============================
const juegos = [
  {
    routeName: "isaac",
    gameTitle: "Isaac",
    gameDescription: "Mejor juego",
    gameLaunch: "2015",
    gameDeveloper: "Edmun",
    gameMode: "Un jugador",
  },
];
//===========================

//RUTAS
//=================================================

app.get("/isaac", function (req, res) {
  res.json(isaac);
});

app.get("/:juegos", function (req, res) {
  const chosen = req.params.juegos;

  //logea
  console.log(chosen);

  res.end();
});

app.get("/", function (req, res) {
  res.send("Pagina Principal");
});

//manda todo el arreglo de juegos
app.get("/api/juegos", function (req, res) {
  return res.json(juegos);
});

//manda un juego del arreglo dinamico
app.get("/api/juegos/:juegos", function (req, res) {
  //selecciona el juego escogido
  var chosen = req.params.juegos;

  //Filtro para mostrar el juego
  for (var i = 0; i < juegos.length; i++) {
    if (chosen === juegos[i].routeName) {
      return res.json(juegos[i]);
    }
  }

  return res.json({});
});

//Crea nuevos personajes- JSON input
app.post("/api/juegos", function (req, res) {
  const newgame = req.body; //Recuperamos la info

  console.log(newgame);

  juegos.push(newgame);

  res.json(newgame);
  //[Game name,description,release date, game dev, players]
});

/*async function newGame() {
  let jg = new JG({
    routeName: "isaac",
    gameTitle: "Isaac",
    gameDescription: "Mejor juego",
    gameLaunch: "2015",
    gameDeveloper: "Edmun",
    gameMode: "Un jugador",
  });

  await jg.save();
}


async function getAllGammes() {
  let juegos = await JG.find();
  console.log(juegos);
}

async function getAllGammes() {
  let juegos = await JG.find();
  console.log(juegos);
}

getAllGammes();
newGame();*/

//Display all games
app.get("/api/juegos/:juegos", function (req, res) {
  let games = JG.find();
});

//=================================================

//GET, POST, PUT, DELETE

//pirmer parametro: la ruta(Home), segundo argumento: funcion callback ( 2 args)
app.get("/juegoEjemplo", function (req, res) {
  //res.send("Hola");
  res.send("Aqui los juegos ");
  // res.json({ Juego: "Hollow Knight" });
});

app.post("/juegoEjemplo", function (req, res) {
  let juego = req.body.juego;
  let gamemode = req.body.gamemode;

  res.send(`Juego: ${juego} gamemode: ${gamemode}`);
  // res.json(req.body);
});

app.put("/juegos", function (req, res) {
  let juego = req.body.juego;
  let gamemode = req.body.gamemode;

  res.send(`Juego: ${juego} gamemode: ${gamemode}`);
  // res.json(req.body);
});

app.delete("/juegos", function (req, res) {
  let juego = req.body.juego;
  let gamemode = req.body.gamemode;

  res.send(`Juego: ${juego} gamemode: ${gamemode}`);
  // res.json(req.body);
});
