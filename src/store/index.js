import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import firstReducer from './reducers/firstReducer'
import secondReducer from './reducers/secondReducer'

const rootReducer = combineReducers({
    fr: firstReducer,
    sr: secondReducer
})

// Apply redux devTool extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk)))
export default store 