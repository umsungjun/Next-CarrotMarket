import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@/libs/server/client";
import { withApiSession } from "@/libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    body: { name, price, description },
    session: { user },
  } = req;
  const product = await client.product.create({
    data: {
      image:
        "https://cdn.motor1.com/images/mgl/zxQBp4/s3/2024-lamborghini-revuelto-exterior.jpg",
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

export default withApiSession(withHandler({ method: "POST", handler }));
