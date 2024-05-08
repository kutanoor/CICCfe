import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../lib/db'; // Ensure this path is correct
import User from '../../lib/db/models/User'; // Ensure this path is correct

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  const { name, email, password } = req.body;

  try {
    await dbConnect();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error); // Use console.error for errors
    res.status(500).json({ message: 'Internal server error' });
  }
}
