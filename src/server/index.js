/* becodeorg/trouvkach
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 06/09/2019
 */

import express from "express";
import path from "path";

const {APP_PORT} = process.env;

const app = express();

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.get("/hello", (req, res) => {
    // eslint-disable-next-line no-console
    console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
    res.send("Hello, World!");
});

app.listen(APP_PORT, () =>
    // eslint-disable-next-line no-console
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);

const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const url = "mongodb://dev:dev@mongo:27017";

MongoClient.connect(url, (err, client) => {
    assert.equal(null, err);

    const db = client.db("trouvkash");
    const terminals = db.collection("terminals");
    const banks = db.collection("banks");
    console.log(banks.find());
    client.close();
});
