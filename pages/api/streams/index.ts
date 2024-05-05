import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@/libs/server/client";
import { withApiSession } from "@/libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    session: { user },
    body: { name, price, description },
  } = req;
  if (req.method === "POST") {
    const stream = await client.stream.create({
      data: {
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
    return res.json({ ok: true, stream });
  } else if (req.method === "GET") {
    const { page } = req.query;
    const streams = await client.stream.findMany({
      take: 5,
      skip: page ? +page * 5 : 0,
      orderBy: {
        id: "desc",
      },
    });
    const totalCount = await client.stream.count();
    return res.json({ ok: true, streams, totalCount });
  }
}

export default withApiSession(
  withHandler({ methods: ["GET", "POST"], handler })
);
