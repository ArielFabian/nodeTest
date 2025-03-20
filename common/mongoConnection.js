const { MongoClient, ServerApiVersion } = require("mongodb")
const dotenv = require('dotenv')
dotenv.config()

const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTERNAME}.7emsl.mongodb.net/?appName=TestCluster`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

module.exports = client