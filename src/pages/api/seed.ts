// import Courses from "models/Courses";
import nc from "next-connect";
import data from "../../utils/data";
import db from "../../utils/db";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = nc();
type Data = {
  message: string;
};

handler.get(async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();
  await db.disconnect();
  res.send({ message: "seeded successfully" });
});

export default handler;
