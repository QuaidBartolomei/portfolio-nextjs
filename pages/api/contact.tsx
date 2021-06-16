import type { NextApiRequest, NextApiResponse } from 'next';
import { createTransport } from 'nodemailer';

type Data = {
  success: Boolean;
};

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const transporter = createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: process.env.EMAIL_USERNAME,
    to: process.env.PERSONAL_EMAIL,
    subject: `Message From ${req.body.name}`,
    text: req.body.message + ' | Sent from: ' + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  console.log(req.body);
  res.send({ success: true });
};
