import {Client, Account, Databases} from 'appwrite'

//Set endpoint for Appwrite API.

const client = new Client();

client
    .setEndpoint('http://45.153.187.162:234/v1')
    .setProject('63dc0c0837d79bb0f999');

export const account = new Account(client)

//Database

export const databases = new Databases(client, "63dc0ed016dccb1ebc1a")