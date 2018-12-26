import {EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEES_FETCH_SUCCESS} from './types.js'
import {Actions} from 'react-native-router-flux'
import firebase from 'firebase'

export const employeeUpdate = ({prop, value}) =>{
return{
    type: EMPLOYEE_UPDATE,
    payload: {prop, value}
}
}

export const employeeCreate = ({name, phone, shift})=>{
    return(dispatch)=>{
firebase.database().ref(`/users/${firebase.auth().currentUser.uid}/employees`).
   push({name,phone,shift}).
   then(()=> {
       Actions.pop()
       dispatch({type: EMPLOYEE_CREATE})
   })
    }
   
}


export const employeeFetch = () =>{
    return (dispatch) =>{
        firebase.database().ref(`/users/${firebase.auth().currentUser.uid}/employees`).
        on('value',snapshot => {
            dispatch({type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val()})
        })
    }
}

export const employeeSave = ({name, phone,shift, uid}) =>{

    return (dispatch)=>{
        firebase.database().ref(`/users/${firebase.auth().currentUser.uid}/employees/${uid}`).
        set({name, phone,shift}).then(()=>{
            Actions.pop()
            dispatch({type: EMPLOYEE_CREATE})
        })
    }
}