import React from 'react'
import ReactDOM from 'react-dom'
//import Main from './Components/main'
import './styles/stylesheets.css'
import {BrowserRouter} from 'react-router-dom'
import {createStore, compose, applyMiddleware} from 'redux'
import rootReducer from './redux/reducer'
import {Provider} from 'react-redux'
import App from './Components/app'
import thunk from 'redux-thunk'
import {database} from './database/config'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))

//const element = React.createElement('h1', null, 'hello abhishek')
// const greetings = ['hi', 'hello', 'namaste', 'whats up']
// const element = (
//     <div>
//         <h1><strong>Greetings</strong></h1>
//         <ol>
//             {greetings.map((greeting, index) => <li key = {index}> {greeting} </li>)}
//             {/* <li>hi</li>
//             <li>hello</li>
//             <li>namaste</li> */}
//         </ol>
//     </div>
// )

ReactDOM.render(<Provider store = {store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'))
