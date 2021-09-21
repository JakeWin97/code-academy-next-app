import nodemailer from 'nodemailer'

export default async (req: { body: any }, res: any) => {
    const { name, reason, message, email, phone } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.user,
            pass: process.env.pass
        },
    });

    try {
        const mail = await transporter.sendMail({
            from: email,
            to: 'info.groceries4u@gmail.com',
            subject: `Contact form: ${reason}`,
            html: `<h1>You have a new contact form submission</h1>
            <p><strong>Name: </strong>${name}</p>
            <p><strong>Email: </strong>${email}</p>
            <p><strong>Phone: </strong>${phone}</p>
            <p><strong>Message: </strong>${message}</p>`
        });
        console.log('Message sent')
    } catch (err) {
        console.log(err);
    }

    res.status(200).json(req.body);
}