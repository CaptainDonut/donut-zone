import {Client, Account, Databases} from 'appwrite'

//Set endpoint for Appwrite API.

const client = new Client();
export const account = new Account(client);
export const databases = new Databases(client, "6406469a133a9b2410b5") //database id: 6406468874a62f5d047e, collection id: 6406469a133a9b2410b5

client
    .setEndpoint('https://appwrite.donut.zone/v1')
    .setProject('640644edc93dfd1ed8b8')
