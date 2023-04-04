const express = require('express')
const app = express()
const cookieParser = require('cookie-parser');
app.use(cookieParser());

const crypto = require('crypto');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

var mysql = require('mysql');
const { hasSubscribers } = require('diagnostics_channel');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mypass',
    database: 'shop'
})

connection.connect();

app.get('/search', function (req, res) {
    connection.query(`SELECT * from ShopItem where itemName like "%${req.query.s}%"`, function (error, results, fields) {
        if (error) {
            res.status(500).send(error)
            console.log(error)
        }
        res.send(results)
    });
})

app.get('/', function (req, res) {
    res.sendFile(`${__dirname}/index.html`);
})

app.get('/admin', function (req, res) {
    connection.query(`SELECT * from ShopUser`, function (error, results, fields) {
        if (error) {
            res.status(500)
            console.log(error)
        }

        if (req.cookies.password) {

            hash = crypto.createHash('md5').update(req.cookies.password).digest('hex');
        } else {
            res.sendFile(`${__dirname}/admin.html`);
        }

        loggedIn = false
        for (i = 0; i < results.length; i++) {

            if (results[i].userName == req.cookies.username &&
                results[i].userHash == hash) {
                // res.sendFile(`${__dirname}/loggedin.html`);

                loggedIn = true;
            }

        }

        if (!loggedIn) {
            res.sendFile(`${__dirname}/admin.html`);

        } else {
            res.sendFile(`${__dirname}/loggedin.html`);

        }


        console.log(req.cookies)
    });


})



app.post('/admin', function (req, res) {
    connection.query(`SELECT * from ShopUser`, function (error, results, fields) {
        if (error) {
            res.status(500)
            console.log(error)
        }

        if (req.cookies.password) {

            hash = crypto.createHash('md5').update(req.cookies.password).digest('hex');
        } else {
            res.sendFile(`${__dirname}/admin.html`);
        }

        loggedIn = false
        for (i = 0; i < results.length; i++) {

            if (results[i].userName == req.cookies.username &&
                results[i].userHash == hash) {
                // res.sendFile(`${__dirname}/loggedin.html`);

                loggedIn = true;
            }

        }
        console.log("post!")

        if (loggedIn) {

            connection.query(
                `insert into ShopItem(itemID, itemName, itemPrice, itemStock) values(${eval(req.body.itemID)}, "${eval(req.body.itemName)}", ${(req.body.itemPrice)}, ${eval(req.body.itemStock)});`,
                function (error, results, fields) {
                    console.log(error)
                })

            res.send(req.query)

        }

    });


})


app.listen(3000)