import nodemailer, { SentMessageInfo } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

const SMTP_SERVER: string = 'mail.cock.li';
const SMTP_PORT: number = 587;
const SMTP_AUTH_ACCOUNT = 'claymore@cock.li';
const SMTP_AUTH_PASSWORD = '2dQ3U3hQufsG325';

const mailer: Mail = nodemailer.createTransport({
    host: SMTP_SERVER,
    secure: false,
    port: SMTP_PORT,
    tls: {
        ciphers: 'SSLv3',
    },
    auth: {
        user: SMTP_AUTH_ACCOUNT,
        pass: SMTP_AUTH_PASSWORD,
    },
});

export const sendEmail = (to: string, subject: string, content: string): Promise<SentMessageInfo> => {
    const mail_options: Mail.Options = {
        to: to,
        from: SMTP_AUTH_ACCOUNT,
        subject: subject,
        text: content,
    };

    return mailer.sendMail(mail_options);
};
