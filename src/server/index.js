/* becodeorg/trouvkach
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 06/09/2019
 */

import express from "express";
import path from "path";

const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const url = "mongodb://dev:dev@mongo:27017";

const {APP_PORT} = process.env;

const app = express();

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.get("/hello", (req, res) => {
    // eslint-disable-next-line no-console
    console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
    res.send("Hello, World!");
});

app.get("/terminals", (req, res) => {
    MongoClient.connect(url, (err, client) => {
        assert.equal(null, err);

        const db = client.db("trouvkash");

        var myPromise = () => {
            return new Promise((resolve, reject) => {
           
               db
                .collection('terminals')
                .find()
                .limit(1)
                .toArray(function(err, data) {
                    err 
                       ? reject(err) 
                       : resolve(data[0]);
                  });
            });
        }

        var callMyPromise = async () => {
        
        var result = await (myPromise());
        //anything here is executed after result is resolved
        return result;
        };
        
        callMyPromise().then(function(result) {
        client.close();
        res.send(result);
        });
});

app.get("/banks", (req, res) => {
    MongoClient.connect(url, (err, client) => {
        assert.equal(null, err);

        const db = client.db("trouvkash");
        const banks = db.collection("banks");

        // eslint-disable-next-line no-console
        console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
        res.send(db.banks.find({_id: "53937660e0b8c05979c6ea55"}));
        client.close();
    });
});

app.listen(APP_PORT, () =>
    // eslint-disable-next-line no-console
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);

// MongoClient.connect(url, (err, client) => {
//     assert.equal(null, err);

//     const db = client.db("trouvkash");
//     terminals = db.collection("terminals");
//     banks = db.collection("banks");
//     terminals
//         .find()
//         .limit(10)
//         .toArray((_err, items) => {
//             console.log(items);
//         });
//     banks
//         .find()
//         .limit(10)
//         .toArray((_err, items) => {
//             console.log(items);
//             db.listCollections();
//         });

//     client.close();
// });
