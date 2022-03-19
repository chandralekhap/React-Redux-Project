
import {combineReducers} from 'redux'
import {postsReducers} from './postsReducers'
import {userReducers} from './userReducers'

export default combineReducers({ 

  post:   postsReducers,
  user: userReducers
}); 