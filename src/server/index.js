/* eslint-disable no-console */
/* becodeorg/trouvkach
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 06/09/2019
 */

import express from "express";
import path from "path";
import assert from "assert";
import mongodb from "mongodb";
const MongoClient = mongodb.MongoClient;

const {APP_PORT} = process.env;

const app = express();

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.get("/map", (req, res) => {
    console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);

    const url = "mongodb://dev:dev@mongo:27017";

    MongoClient.connect(url, (err, client) => {
        assert.equal(null, err);

        const db = client.db("trouvkash");
        const banks = db.collection("banks");
        console.log(
            banks
                .find({name: "Argenta"})
                .limit(20)
                .toArray((_err, items) => {
                    client.close();
                    res.send(items);

                    let count = 0;

                    while (count < items.length) {
                        console.log(`THERE >>> ${items[count].name}`);
                        count++;
                    }
                }),
        );
        client.close();
    });
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
