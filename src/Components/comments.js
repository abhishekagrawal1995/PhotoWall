import React, {Component} from 'react'

class Comment extends Component {

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        console.log("submitting comment")
        event.preventDefault()
        const comment_text = event.target.elements.comment.value
        if (comment_text) {
            const comment = {
                id: Number(new Date()),
                text: comment_text
            }
            event.target.elements.comment.value = ''
            this.props.onAdd(comment, this.props.post_id)
        }
    }

    render() {
        return (
            <div className = 'comments'>
                <form className= 'comment-form' onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='Enter comment' name = 'comment'></input>
                    <input type= 'submit' hidden ></input>
                </form>

                <div className = 'comment-list'>
                    {this.props.comments.sort(function(comment1, comment2) {
                            return (comment2.id - comment1.id)
                        }).map((comment) =>  <p key = {comment.id}> {comment.text} </p> )
                    }
                </div>

            </div>
        )
    }
}

export default Comment