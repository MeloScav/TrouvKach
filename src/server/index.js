/* eslint-disable no-console */
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

const uri = "mongodb+srv://admin:admin@cash-dejic.gcp.mongodb.net/test2";
const client = new MongoClient(uri, {useNewUrlParser: true});
client.connect(() => {
    const collection = client.db("test2").collection("Terminals");
    console.log(
        collection
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
