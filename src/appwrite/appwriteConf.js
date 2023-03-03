import {Client, Account, Databases} from 'appwrite'

//Set endpoint for Appwrite API.

const client = new Client();
export const account = new Account(client);
export const databases = new Databases(client, "64020b71e5bf81bf875a") //database id: 64020b470c9c427c3b5b, collection id: 64020b71e5bf81bf875a

client
    .setEndpoint('https://45.153.187.162/v1')
    .setProject('6402095141b7d552c3c0')
