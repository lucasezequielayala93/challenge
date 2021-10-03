import axios from 'axios'
import users from './users'
import posts from './posts'

export default {
    users: new users(axios),
    posts: new posts(axios)
}