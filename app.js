const express = require('express')
const app = express()


var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mypass',
    database: 'shop'
})

connection.connect();

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/search', function (req, res) {
    connection.query(`SELECT * from ShopItem where itemName like "%${req.query.s}%"`, function (error, results, fields) {
        if (error) {
            res.status(500).send(error)
            console.log(error)
        }
        res.send(results)
    });
})

app.listen(3000)