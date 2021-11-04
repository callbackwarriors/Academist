import nc from "next-connect";
import Contact from "../../../models/Review";
import db from "../../../utils/db";

const handler = nc();

handler.post(async (req, res) => {
  await db.connect();
  const newContact = new Contact({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
    img: req.body.img,
  });

  const user = await newContact.save();
  await db.disconnect();

  res.send({
    name: user.name,
    email: user.email,
    message: user.message,
    img: user.img
  });
});
export default handler;