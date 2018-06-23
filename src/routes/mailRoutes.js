const Mailer = require('../services/mailer');

module.exports = app => {
    app.post('/api/send', (req, res) => {
       // const { name, mail, enterprise, phone, message } = req.body;
        const body = req.body;

        const template = (body) => 	`<html><p><strong>Nombres:</strong>${body.name}</p>
                                                <p><strong>Email:</strong>${body.mail}</p>
                                                <p><strong>Telefono:</strong>${body.enterprise}</p>
                                                <p><strong>Empresa:</strong>${body.phone}</p>
                                                <p><strong>Mensaje:</strong>${body.message}</p></html>`;
        // send mail
        const mailer = new Mailer(template);
        mailer.send()
    });
};
