import nc from "next-connect";
import Order from "../../../models/Orders";
import db from "../../../utils/db";

const handler = nc();

handler.post(async (req, res) => {
  await db.connect();
  const newOrder = new Order({
    ...req.body,
  });
  console.log("newOrder", newOrder);
  const order = await newOrder.save();
  console.log("order", order);
  res.send(order);
});

export default handler;
