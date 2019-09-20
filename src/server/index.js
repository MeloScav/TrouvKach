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

        const myPromise = () =>
            new Promise((resolve, reject) => {
                db.collection("terminals")
                    .find()
                    .limit(1)
                    // eslint-disable-next-line no-shadow
                    .toArray((err, data) => {
                        // eslint-disable-next-line no-unused-expressions
                        err ? reject(err) : resolve(data[0]);
                    });
            });

        const callMyPromise = async () => {
            const result = await myPromise();
            //anything here is executed after result is resolved
            return result;
        };

        callMyPromise().then(result => {
            client.close();
            res.send(result);
        });
    });
});

app.listen(APP_PORT, () =>
    // eslint-disable-next-line no-console
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
