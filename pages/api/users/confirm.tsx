import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@/libs/server/client";
import { withApiSession } from "@/libs/server/withSession";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { token } = req.body;
  const exists = await client.token.findUnique({
    where: {
      payload: token,
    },
    // include: { user: true }, // option 추가 시 userID에 해당하는 유저 정보 또한 내려줌
  });

  if (!exists) return res.status(404).end();

  req.session.user = {
    id: exists.userId,
  };
  await req.session.save();
  res.json({ ok: true });
}

export default withApiSession(withHandler("POST", handler));
