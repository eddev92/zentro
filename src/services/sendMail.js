// import axios from 'axios';

// export default class sendMailServices {

//     sendMailContact(params) {
//         console.log(params)
//        return axios.post(`http://zentro.pe/api/send/${params.name}/${params.mail}/${params.enterprise}/${params.phone}/${params.message}`)
//             .then(res => {
//                 console.log(res, 'envio contacto')
//                 return res.data;
//             })
//     }

// }
import axios from 'axios';

export default class sendMailServices {

    sendMailContact(params) {
       return axios.post('js/sendMail/sendMail.php', params)
            .then(res => {
                console.log(res, 'envio contacto')
                return res.data;
            })
    }
}