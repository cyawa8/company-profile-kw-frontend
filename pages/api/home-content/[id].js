import { deleteHomeContent, updateHomeContent } from "@/pages/_lib/api";

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    if (req.method === 'PUT') {
      const result = await updateHomeContent(id, req.body);
      res.status(200).json(result);
    } else if (req.method === 'DELETE') {
      const result = await deleteHomeContent(id);
      res.status(200).json(result);
    } else {
      res.setHeader('Allow', ['PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
