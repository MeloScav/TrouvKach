/* eslint-disable no-console */
import express from "express";
import path from "path";

const {APP_PORT} = process.env;
const app = express();
const MongoClient = require("mongodb").MongoClient;

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.get("/bank/:name", (req, res) => {
    const uri = "mongodb+srv://admin:admin@cash-dejic.gcp.mongodb.net/test";
    const client = new MongoClient(uri, {useNewUrlParser: true});

    let report = "";

    client.connect(() => {
        const collection = client.db("test").collection("Banks");
        console.log(
            collection
                .find()
                .limit(20)
                .toArray((err, items) => {
                    client.close();
                    report = report + String(items[0].name);
                    res.send(report);
                    console.log(err);
                }),
        );
        client.close();
    });
});

app.listen(APP_PORT, () =>
    // eslint-disable-next-line no-console
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
