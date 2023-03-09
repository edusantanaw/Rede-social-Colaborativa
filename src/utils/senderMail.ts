import nodemailer from "nodemailer";
import config from "../../config/nodemailer";

type data = {
  text: string;
  subject: string;
  to: string;
};

export class SenderMailer {
  public async send(data: data) {
    const sendMail = this.makeTransport();
    await sendMail.sendMail({
      subject: data.subject,
      text: data.text,
      from: `Eduardo Santana <${config.user}>`,
      to: data.to,
    });
  }

  private makeTransport() {
    const transport = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: false,
      auth: {
        user: config.user,
        pass: config.pass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    return transport;
  }
}
