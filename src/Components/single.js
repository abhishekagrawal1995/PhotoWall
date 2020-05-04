import React, {Component} from 'react'
import Photo from './photo';
import Comment from './comments'

class SinglePhoto extends Component{

    render() {
        const {match, posts, comments} = this.props
        const post_id = Number(match.params.id)
        const post = posts.find((post) => (post.id === post_id))
        const post_comments = comments[post_id] || []

        if (this.props.loading) {
            return <div className='loader'> ...loading </div>
        } else if (!post) {
            return <h2 className='loader'> No posts found... </h2>
        } else {
            return (
                <div className = 'single-photo'>
                    <Photo {...this.props} post = {post}/>
                    <Comment comments={post_comments} onAdd={this.props.startAddingComments} post_id = {post_id}/>
                </div>
            )
        }
    }
}

export default SinglePhoto