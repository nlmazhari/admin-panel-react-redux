import axios from 'axios'

// define server url here to use with APIes
export const serverUrl = ''

export default function query(url, body = {}) {
    return axios.post(serverUrl + url, body)
}