import * as actionsTypes from '../actions/actions'

const initialState = {
    firstState: 0,
}

const firstReducer = (state = initialState, action) => {
    switch(action.type){
        case actionsTypes.FIRSTACTION:
            console.log(state, action)
            return{
                ...state, firstState: state.firstState+1
            }
    }
    return state
}

export default firstReducer