import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import Orders from '../../../models/Orders';
import db from '../../../utils/db';
import { signToken } from '../../../utils/auth';

const handler = nc();

handler.post(async (req, res) => {
  await db.connect();
  const newOrders = new Orders({
    name: req.body.name,
    email: req.body.email,
    isAdmin: false,
  });
  const orders = await newOrders.save();
  await db.disconnect();

  const token = signToken(user);
  res.send({
    token,
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  });
});

export default handler;