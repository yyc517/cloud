import ActionType from './Type'
const initialState = {
    loginStatus: true,
    user: {}
}

const getNewState = function(state, action){
    switch(action.type){
        case ActionType.LOGIN_IN:
            return {
                loginStatus: true,
                user: action.data
            }
        case ActionType.LOGIN_OUT:
            return {
                loginStatus: false
            }
        default: 
            return state
    }
}

export default {
    initialState,
    getNewState
}