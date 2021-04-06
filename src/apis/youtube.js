import axios from 'axios';

const KEY = 'AIzaSyB1bKOPF8trgEVBku0yUJnTpfvQyZ7BxO0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        type: 'video',
        maxResults:5,
        key: KEY

    }
})