import type { NextApiRequest, NextApiResponse } from 'next';
import StatusCodes from 'http-status-codes';
import { createTransport } from 'nodemailer';

const to = process.env.RECEIVING_ADDRESS;
const from = process.env.SENDING_ADDRESS;
const pass = process.env.SMTP_PASSWORD;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const transporter = createTransport({
    service: 'SendinBlue', 
    auth: {
      user: from,
      pass,
    },
  });

  const mailData = {
    from,
    to,
    subject: `Message From ${req.body.name}`,
    text: req.body.message + ' | Sent from: ' + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
  };

  transporter
    .sendMail(mailData)
    .then(mailResult => {
      console.log('Successfully sent');
      res.status(StatusCodes.OK).send({});
    })
    .catch(err => {
      console.error(err);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({});
    });

  console.log(`Mail successfully sent from ${from} to ${to}`);
};

export default handler;
