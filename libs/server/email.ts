import nodemailer from "nodemailer";

const smtpTransport = nodemailer.createTransport({
  service: "Naver",
  host: "smtp.naver.com",
  port: 587,
  auth: {
    user: "umseongjun@naver.com",
    pass: "okum040500@",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export default smtpTransport;
