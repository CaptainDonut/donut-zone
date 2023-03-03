import {Client, Account, Databases} from 'appwrite'

//Set endpoint for Appwrite API.

const client = new Client();
export const account = new Account(client);
export const databases = new Databases(client, "63dc0ed016dccb1ebc1a") //database id: 63dc0eaf483ed667f54a, collection id: 63dc0ed016dccb1ebc1a

client
    .setEndpoint('https://appwrite.donut.zone/v1')
    .setProject('6402095141b7d552c3c0')
