import type { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '../../lib/db';
import User from '../../lib/db/models/User';
// import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
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
    // Update the user's password in the database
    await connectDB();

    const hashedPassword = await bcrypt.hash(password, 8);
    const updatedUser = await User.findOneAndUpdate({ email: email }, { password: hashedPassword }, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    return res.status(200).json({ success: true, message: 'Password updated successfully' });
  } catch (error) {
    console.error('Error updating password:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
}
