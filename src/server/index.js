import express from "express";
import path from "path";

const {APP_PORT} = process.env;

const app = express();

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.get("/bank/:name", (req, res) => {
    res.send(req.params.name);
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
    console.log(
        terminals
            .find()
            .limit(20)
            .toArray((err, items) => {
                client.close();
                console.log(items);
                console.log(err);
            }),
    );
    client.close();
});
