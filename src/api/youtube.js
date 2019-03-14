const KEY='AIzaSyDcaEQ7oXyHW7pPeBOsR6k4Rj-oa4eKqp0';
const axios = require('axios');

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY
    }
});