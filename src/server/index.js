/* becodeorg/trouvkach
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 06/09/2019
 */

import express from "express";
import path from "path";
import {mongoRequestBanks, mongoRequestZoom} from "./mongo";

const {APP_PORT} = process.env;

const app = express();

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.get("/bank", (req, res) => {
    console.log("hello bank");
    mongoRequestBanks().then(rep => {
        res.send(rep); // Envoie la réponse
    });
});

// Recupère longitude, latitude, distance
app.get("/terminal/:long/:lat/:dist", (req, res) => {
    console.log(req.params.long, req.params.lat, req.params.dist);
    mongoRequestZoom(req.params.long, req.params.lat, req.params.dist).then(
        rep => {
            res.send(rep); // Envoie la réponse
        },
    );
});

app.listen(APP_PORT, () =>
    // eslint-disable-next-line no-console
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
