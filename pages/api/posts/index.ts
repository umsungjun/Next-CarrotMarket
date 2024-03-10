import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@/libs/server/client";
import { withApiSession } from "@/libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method === "GET") {
    const {
      query: { latitude, longitude },
    } = req;

    const parsedLatitude = latitude ? parseFloat(latitude.toString()) : 0;
    const parsedLongitude = longitude ? parseFloat(longitude.toString()) : 0;
    const posts = await client.post.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
        _count: {
          select: {
            wonderings: true,
            answers: true,
          },
        },
      },
      where: {
        latitude: {
          gte: parsedLatitude - 0.01, // get 크거나 같다
          lte: parsedLatitude + 0.01, // lte 작거나 같다
        },
        longitude: {
          gte: parsedLongitude - 0.01, // get 크거나 같다
          lte: parsedLongitude + 0.01, // lte 작거나 같다
        },
      },
    });
    res.json({ ok: true, posts });
  }

  if (req.method === "POST") {
    const {
      body: { question, latitude, longitude },
      session: { user },
    } = req;
    const post = await client.post.create({
      data: {
        question,
        latitude,
        longitude,
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });
    res.json({ ok: true, post });
  }
}

export default withApiSession(
  withHandler({ methods: ["GET", "POST"], handler })
);
