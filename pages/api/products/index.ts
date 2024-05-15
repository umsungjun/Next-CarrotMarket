import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@/libs/server/client";
import { withApiSession } from "@/libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method === "GET") {
    const { page } = req.query;
    const products = await client.product.findMany({
      take: 10,
      skip: page ? +page * 10 : 0,
      include: {
        _count: {
          select: {
            favs: true,
          },
        },
      },
      orderBy: {
        id: "desc",
      },
    });
    const totalCount = await client.product.count();

    res.json({ ok: true, products, totalCount });
  }
  if (req.method === "POST") {
    const {
      body: { name, price, description, photoId },
      session: { user },
    } = req;
    const product = await client.product.create({
      data: {
        image: photoId,
        name,
        price,
        description,
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });
    res.json({ ok: true, product });
  }
}

export default withApiSession(
  withHandler({ methods: ["GET", "POST"], handler })
);
