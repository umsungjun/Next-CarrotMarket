import twilio from "twilio";
import client from "@/libs/server/client";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import smtpTransport from "@/libs/server/email";

const twilioClient = require("twilio")(
  process.env.TWILIO_SID,
  process.env.TWILIO_TOKEN
);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  const user = phone ? { phone } : email ? { email } : null;
  if (!user) return res.status(400).json({ ok: false });
  const payload = Math.floor(100000 * Math.random() * 90000) + "";

  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  });
  if (phone) {
    const message = await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_MSID,
      to: process.env.MY_PHONE!, // 이론상에는 가입한 번호에 문자 메시지가 가는게 맞지만 twilio가 평가판 계정이기 때문에 내 핸드폰 번호로 문자 전송 테스트
      body: `인증번호: ${payload}. `,
    });
    console.log(message);
  }
  if (email) {
    const mailOptions = {
      from: "umseongjun@naver.com",
      to: email,
      subject: "Nomad Carrot Authentication Email",
      text: `인증번호 : ${payload}`,
    };
    const result = await smtpTransport.sendMail(
      mailOptions,
      (error, responses) => {
        if (error) {
          console.error(error);
        }
      }
    );
    smtpTransport.close();
    console.log(result);
  }
  return res.json({
    ok: true,
  });
}

export default withHandler("POST", handler);
