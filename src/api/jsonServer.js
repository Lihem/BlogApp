import axios from 'axios'

export default axios.create({
    baseURL: 'https://7fd80086b629.ngrok.io'
})
//      jsonserver -> npm run tunnel
//      jsonserver -> npm run db