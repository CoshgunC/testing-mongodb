// pages/api/links.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../lib/mongodb';

interface Link {
  title: string;
  url: string;
  createdAt: Date;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const { database } = await connectToDatabase();

  if (method === 'GET') {
    // Get all links from the database
    const links = await database.collection('links').find({}).toArray();
    res.status(200).json(links);
  } else if (method === 'POST') {
    // Add a new link to the database
    const { title, url }: { title: string; url: string } = req.body;

    if (!title || !url) {
      return res.status(400).json({ error: 'Title and URL are required' });
    }

    const newLink: Link = {
      title,
      url,
      createdAt: new Date(),
    };

    // Insert the link and get the insertedId
    const result = await database.collection('links').insertOne(newLink);

    // Send back the inserted document along with the insertedId
    res.status(201).json({
      _id: result.insertedId.toString(), // MongoDB ObjectId needs to be converted to string
      title: newLink.title,
      url: newLink.url,
      createdAt: newLink.createdAt,
    });
  } else {
    res.status(405).json({ error: `Method ${method} Not Allowed` });
  }
}
