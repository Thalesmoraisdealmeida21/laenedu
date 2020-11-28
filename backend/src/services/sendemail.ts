import nodemailer from 'nodemailer';



const sendMail = async ({name, email}: {name: string; email: string}) => {
    let transport = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        secure: true, // upgrade later with STARTTLS
        auth: {
          user: "laenedu123@outlook.com",
          pass: "tha123456"
        }
      });

      let info = await transport.sendMail({
        from: 'laenedu123@outlook.com', // sender address
        to: email, // list of receivers
        subject: "Plataforma LAENEDU", // Subject line

        html: `Olá <b>${name}</b> <br />
        <p>Ficamos muito felizes que você se interessou por nóssa plataforma, em breve estaremos encaminhando mais informações para você</p>
        <p>Se quiser saber mais </p> <a href="http://localhost:3000/viewcontent"></a>
        `, // html body
      });

      console.log('info');

    
}


export default sendMail;