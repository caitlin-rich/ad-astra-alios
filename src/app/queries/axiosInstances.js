
import axios from 'axios'
import rateLimit from 'axios-rate-limit';

console.log('in axios instance', process.env.NEXT_PUBLIC_TMDB_API_KEY)

export const axiosGet = rateLimit(axios.create({
    method: 'get',
    baseURL: `https://api.themoviedb.org`,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
    },
  }), {maxRequests: 40, perMilliseconds: 1000})