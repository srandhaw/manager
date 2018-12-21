import {EMAIL_CHANGED} from '../actions/types.js'

export default (state='', action)=>{
    switch(action.type){
        case EMAIL_CHANGED:
        return {...state, email: action.payload}
        default:
        return state
    }
}