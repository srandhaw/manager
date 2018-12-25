import {EMPLOYEE_UPDATE, EMPLOYEE_CREATE} from '../actions/types'

export default (state = '', action) =>{
  
    switch(action.type){
        case EMPLOYEE_UPDATE:
        return {...state,[action.payload.prop]: action.payload.value}
        case EMPLOYEE_CREATE:
        return{name: '',phone: '',shift: ''}
        default: 
        return state
    }
}

