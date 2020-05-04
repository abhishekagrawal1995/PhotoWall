import _posts from '../data/posts'
import { combineReducers } from 'redux';

const posts = function(state = _posts, action) {
    switch (action.type) {
        case "REMOVE_POST":
            return (state.filter((post) => (post.id !== action.index)))
        case "ADD_POST":
            return state.concat([action.addedPost])
        case "LOAD_POSTS":
            console.log("loading posts")
            return action.posts
        default:
            return state
    }
}

const comments = function(state = {}, action) {
    const dup_post_state = {}
    switch(action.type) {
        case "ADD_COMMENT":
            dup_post_state[action.post_id] = state[action.post_id] || []
            return {...state, [action.post_id]: [...dup_post_state[action.post_id], action.addedComment]}
        case "LOAD_COMMENTS":
            return action.comments_info
        default:
            return state
    }
}

const rootReducer = combineReducers({posts, comments})

export default rootReducer