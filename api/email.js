'use strict'
const nodemailer = require('nodemailer')

const user = process.env.USER
const pass = process.env.PASSWORD

module.exports.handle = async (event, context) => {
  const { emailBody } = event

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: user,
      pass: pass,
    },
  })

  await transporter.sendMail({
    from: '"Comfortneo BR 👶🏻" <foo@example.com>',
    to: 'maplessmann@gmail.com',
    subject: 'Avaliação da tradução',
    html: `Resultado da avaliação:<br /><br />${emailBody}`,
  })

  return {
    statusCode: 200,
    body: event,
  }
}
