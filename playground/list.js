import React, {Component} from 'react'

class List extends Component {
    render(){
        return (
            <ol>
                {this.props.greetings.map((greeting, index) => <li key = {index}> {greeting} </li>)}
            </ol>
        )
    }
}

export default List