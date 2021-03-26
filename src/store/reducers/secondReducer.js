import * as actionsTypes from '../actions/actions'

const initialState = {
    secondState: [],
}

const secondReducer = (state = initialState, action) => {
    switch(action.type){
        case actionsTypes.SECONDACTION:
            console.log(state, action)
            return{
                ...state, firstState: state.firstState+1
            }
    }
    return state
}

export default secondReducer