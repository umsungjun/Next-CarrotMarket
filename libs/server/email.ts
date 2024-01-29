import nodemailer from "nodemailer";

const smtpTransport = nodemailer.createTransport({
  service: "Naver",
  host: "smtp.naver.com",
  port: 587,
  auth: {
    user: "umseongjun@naver.com",
    pass: "비밀번호@",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export default smtpTransport;
