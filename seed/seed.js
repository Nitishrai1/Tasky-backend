const path = require('path');
require('dotenv').config();
const { Seeder } = require("mongo-seeding");
const { readCollectionsFromPath } = require('mongo-seeding');

const config = {
    database: process.env.MONGODB_URL,
    dropDatabase: false,
    dropCollections: false
}


async function seed() {

    const seeder = new Seeder(config);

    const collections = seeder.readCollectionsFromPath(
        path.resolve(__dirname),
        {
            transformers: [Seeder.Transformers.stripExtension],
            extensions: ['json'],
            filter: (collectionName) => collectionName === 'users'
        }
    );


    try {

        await seeder.import(collections);

        console.log("seeding succesfull");

    } catch (err) {
        console.log('error in seeding the database', err.message);

    }

}

seed();