import { getHomeContent, createHomeContent } from '@/pages/_lib/api';

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const data = await getHomeContent();
      res.status(200).json(data);
    } else if (req.method === 'POST') {
      const result = await createHomeContent(req.body);
      res.status(201).json(result);
    } else {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (err) {
    res.status(500).json({ message: err.message,  });
  }
}
