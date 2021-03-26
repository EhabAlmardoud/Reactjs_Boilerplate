import * as actionsTypes from './actions'

//Action Creaters (usually return action)
//Using Redux Thunk to make action creaters retuns a function (for Async)
export const firtsAction = () =>{
    return{
        type: actionsTypes.FIRSTACTION
    }
}