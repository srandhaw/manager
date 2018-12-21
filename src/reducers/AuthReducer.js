import {EMAIL_CHANGED,PASSWORD_CHANGED} from '../actions/types.js'

export default (state='', action)=>{
    switch(action.type){
        case EMAIL_CHANGED:
        return {...state, email: action.payload}
        case PASSWORD_CHANGED:
        return {...state, password: action.payload}
        default:
        return state
    }
}