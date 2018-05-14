const express = require('express');
const app = express();
var helper = require('sendgrid').mail;
const async = require('async');
require('./routes')(app);
module.exports = (app) => {
    app.post('/api/send', function (req, res, next) {
      async.parallel([
        function (callback) {
          sendEmail(
            callback,
            'informes@zentro.pe',
            {email: 'edwarllanca@hotmail.com'},
            'Subject Line',
            'Text Content',
            '<html><body>some text here</body></html>'
          );
        }
      ], function(err, results) {
          console.log(err)
        res.send({
          success: true,
          message: 'Emails sent',
          successfulEmails: results[0].successfulEmails,
          errorEmails: results[0].errorEmails,
        });
      });
   });
  };
function sendEmail(
    parentCallback,
    from,
    toEmail,
    subject,
    textContent,
    value
  ) {
    const errorEmails = [];
    const successfulEmails = [];
const sg = require('sendgrid')('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');
async.parallel([
      function(callback) {
        // Add to emails
        // for (let i = 0; i < toEmails.length; i ++) {
          // Add from emails
          const senderEmail = new helper.Email(from);
          // Add to email
          const toEmail = new helper.Email('informes@zentro.pe');
          // HTML Content
          const content = new helper.Content('text/html', value);
          const mail = new helper.Mail(senderEmail, subject, toEmail, content);
          var request = sg.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: mail.toJSON()
          });
          sg.API(request, function (error, response) {
            console.log('SendGrid');
            console.log(response.statusCode);
            console.log(response.body);
            if (error) {
             return console.log('Error response received');
            }
            console.log(response.headers);
          });
        // }
        // return
        callback(null, true);
      }
    ], function(err, results) {
      console.log('Done');
    });
    parentCallback(null,
      {
        successfulEmails: successfulEmails,
        errorEmails: errorEmails,
      }
    );
}
