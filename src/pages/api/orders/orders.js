import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import Orders from '../../../models/Orders';
import db from '../../../utils/db';
import { signToken } from '../../../utils/auth';

const handler = nc();

handler.post(async (req, res) => {
  await db.connect();
  const newOrder = new Orders({
     ...req.body,
  });
  const order = await newOrder.save();
  res.status(201).send(order)
});

export default handler;