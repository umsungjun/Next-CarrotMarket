import { withIronSessionApiRoute } from "iron-session/next";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import client from "@/libs/server/client";

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

  if (!exists) res.status(404).end();
  console.log(exists);
  req.session.user = {
    id: exists?.userId,
  };
  await req.session.save();
  res.status(200).end();
}

export default withIronSessionApiRoute(withHandler("POST", handler), {
  cookieName: "carrotSession",
  password: "1234123412352135123412341235213512341234123521351234123412352135",
});
