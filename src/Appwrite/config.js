import { Client, Databases, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('688c6958000234bba14e');

export const databases = new Databases(client);
export const uniqueID = ID;