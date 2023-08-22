const cors = require("cors");
const express = require("express");

const server = express();

server.use(express.json());
server.use(cors());


const clientList = [{
    name: "Nome do Cliente",
    email: "Email do Cliente",
    phone: "Telefone",
}];

server.get("/client/:index", (req, res) => {
    const { index } = req.params;
    return res.json(clientList[index]);
});

server.get("/client", (req, res) => {
    return res.json(clientList);
});

server.post("/client", (req, res) => {
    const { name, email, phone } = req.body;
    clientList.push({name, email, phone});
    return res.json(clientList);
});

server.put("/client/:index", (req, res) => {
    const { index } = req.params;
    const { name, email, phone } = req.body;
    clientList[index] = {name, email, phone};
    return res.json(clientList);
});

server.delete("/client/:index", (req, res) => {
    const { index } = req.params;
    clientList.splice(index, 1);
    return res.json({ message: "Cliente deletado." });
});
server.listen(3333);
console.log("Servidor Iniciado na Porta 2323: http://localhost:3333")