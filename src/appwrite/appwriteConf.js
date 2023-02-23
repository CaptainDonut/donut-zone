import {Client, Account, Databases} from 'appwrite'

//Set endpoint for Appwrite API.

const client = new Client();
export const account = new Account(client);
export const databases = new Databases(client, "63dc0ed016dccb1ebc1a") //database id: 63dc0eaf483ed667f54a, collection id: 63dc0ed016dccb1ebc1a

client
    .setEndpoint('http://45.153.187.162/v1')
    .setProject('63dc0c0837d79bb0f999');
