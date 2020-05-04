import {database} from '../database/config'

export function startAddingPost(post) {
    return (dispatch) => {
        return database.ref('posts').update({[post.id]: post}).then(() => {
            dispatch(addPost(post))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function loadingPosts() {
    return async (dispatch) => {
        try {
            const snapshot = await database.ref('posts').once('value');
            let posts = [];
            snapshot.forEach((childSnapshot) => {
                posts.push(childSnapshot.val());
            });
            dispatch(loadPosts(posts));
        }
        catch (error) {
            console.log(error);
        }
    }
}

export function removingPosts(id) {

    const updates = {
        [`posts/${id}`]: null,
        [`comments/${id}`]: null
       }

    return (dispatch) => {
        //return database.ref('posts/' + id).remove().then(() => {
        return database.ref().update(updates).then(() => {
            dispatch(removePost(id))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function startAddingComments(comment, post_id) {
    return (dispatch) => {
        return database.ref('comments/' + post_id).update({[comment.id]: comment}).then(() => {
            dispatch(addComment(comment, post_id))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function loadingComments() {
    return async (dispatch) => {
        try {
            const snapshot = await database.ref('comments/').once('value');
            let comments_info = {};
            snapshot.forEach((childSnapshot) => {
                console.log(childSnapshot.val())
                comments_info[childSnapshot.key] = Object.values(childSnapshot.val())
            });
            dispatch(loadComments(comments_info));
        }
        catch (error) {
            console.log(error);
        }
    }
}


export function removePost(index) {
    return {
        type: "REMOVE_POST",
        index: index
    }
}

export function addPost(post) {
    return {
        type: "ADD_POST",
        addedPost: post
    }
}

export function addComment(comment, post_id) {
    return {
        type: "ADD_COMMENT",
        addedComment: comment,
        post_id: post_id
    }
}

export function loadPosts(posts) {
    return {
        type: "LOAD_POSTS",
        posts: posts
    }
}

export function loadComments(comments_info) {
    return {
        type: "LOAD_COMMENTS",
        comments_info: comments_info
    }
}