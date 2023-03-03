const express = require("express");
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const PORT = process.env.PORT || 9000;
require("./database/conexion")
const app = express();
const personaController = require("./controllers/volunterControllers")
const videoControllers = require("./controllers/videoControllers");



//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(morgan("common"));


app.get("/datos", async (req, res) => {
    res.json({
        datos: await personaController.findAll()    
    });
});

app.get("/lista", async (req, res) => {
    res.json({
        datos: await videoControllers.findAll()    
    });
});

app.post("/crear", async (req, res) => {
    const { nombre, apellido, pais, opinion } = req.body;
    console.log(`${nombre} - ${apellido} - ${pais} - ${opinion}. Creado`);

    await personaController.create(req.body)
    res.send("Persona creada")
})


app.delete("/:id", (req, res) => {
    res.send("Persona Eliminada")
})

app.put("/", (req, res) => {
    res.send("Persona actualizada!!")
})

app.listen(PORT, () => {
    console.log(`Servidor MERN corriendo en el PUERTO ${PORT}`);
})