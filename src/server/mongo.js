const mongo = require("mongodb").MongoClient;
//const ObjectId = require("mongodb").ObjectID;

//A MODIFIER
//const url = `mongodb+srv://dev:dev@haerphi-trouvkash-jyzbr.mongodb.net/test?retryWrites=true&w=majority`;
const url = "mongodb://dev:dev@mongo:27017";

// Récupère toutes les banques
export const mongoRequestBanks = async () => {
    const client = await mongo.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const db = client.db("trouvkash");
    const collection = db.collection("banks");

    const banks = await collection.find({}).toArray();

    client.close();

    const rep = {
        truc: banks,
    };
    return rep;
};

export const mongoRequestZoom = async (long, lat, dist) => {
    const client = await mongo.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const db = client.db("trouvkash");
    const collection = db.collection("terminals");

    const items = await collection
        .aggregate([
            {
                $geoNear: {
                    near: {
                        type: "Point",
                        // coordonnées données
                        coordinates: [parseFloat(long), parseFloat(lat)],
                    },
                    // calcule la distance
                    distanceField: "dist.calculated",
                    // envoie la distance
                    maxDistance: parseInt(dist),
                },
            },
            // donne une limite
            {$limit: 100},
        ])
        .toArray();

    client.close();
    console.log(items.length);

    const rep = {
        truc: items,
    };
    return rep;
};
