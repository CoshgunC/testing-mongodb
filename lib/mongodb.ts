// lib/mongodb.ts
import { MongoClient, Db } from 'mongodb';

let client: MongoClient;
let database: Db;

const connectToDatabase = async (): Promise<{ client: MongoClient; database: Db }> => {
  if (client && database) {
    return { client, database };
  }

  client = new MongoClient(process.env.MONGODB_URI || '', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  database = client.db('linksdatabase'); // Name of your database

  return { client, database };
};

export { connectToDatabase };
