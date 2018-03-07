import axios from 'axios';

export default class PublicacionesServices {

    getPublicaciones() {
      return axios.get('mocks/publicaciones.json')
            .then(res => {
                return res.data
            })
    }
}