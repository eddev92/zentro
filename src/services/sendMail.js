import axios from 'axios';

export default class sendMailServices {

    sendMailContact(params) {
       return axios.post('js/sendMail/sendMail.php', params)
            .then(res => {
                console.log(res, 'envio contacto')
            })
    }
}