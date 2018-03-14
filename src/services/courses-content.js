import axios from 'axios';

export default class CoursesContentServices {

    getCoursesPresentials() {
      return axios.get('mocks/contentCourses.json')
            .then(res => {
                return res.data;
            })
    }
}