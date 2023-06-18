const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
port = 8985;

let users = [
    {
        id: 1,
        name: "Abhijeet",
        email: "abhijeet@gmail.com"
    },
    {
        id: 2,
        name: "Pardeep",
        email: "pardeep@gmail.com"
    },
    {
        id: 3,
        name: "Rajasekhara Reddy",
        email: "budda@gmail.com"
    },
    {
        id: 4,
        name: "Amir",
        email: "amir@gmail.com"
    },
    {
        id: 5,
        name: "Leonard",
        email: "leonard@gmail.com"
    },
    {
        id: 6,
        name: "Shivam",
        email: "Shivam@gmail.com",

    }
]

app.get('/', (req, res) => {
    res.send(users);
})

app.get("/:id", (req, res) => {
    let Userid = req.params.id;
    let data = users.filter(user => user.id == Userid);
    res.send(data);
})

app.post("/", async (req, res) => {
    users.push(req.body);
    res.send({
        status: 200,
        message: "data send successfully"
    })
})

app.put("/:id", async (req, res) => {
    let id = req.params.id;
    let data = users.filter(e => e.id === id);

    res.send({
        message: "data",
        data
    })
})

app.delete("/:id", async (req, res) => {
    let id = req.params.id;
    users = users.filter(e => e.id !== id);
    res.send({
        message: "data deleted"
    })
})
app.listen(port, (err) => {
    if (err) throw err
    console.log("Server started at " + port);
})
