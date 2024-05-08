import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../lib/db';
import User from '../../lib/db/models/User';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password } = req.body;

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await connectDB();

    // Check if user exists and password is correct
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Create token using the secret key from environment variables
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY || 'defaultSecret', { expiresIn: '1h' });

    // Send the token in the response
    res.status(200).json({ token });
  } catch (error: any) {
    console.error('Login error:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
}
