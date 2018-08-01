import query, { serverUrl } from '../common/Query'
import axios from 'axios'

export const handleLogin = (email, password) => dispatch => {
    // here I just check simple user/pass fordemonstration purpose
    if (email==='admin@admin.com' && password==='admin') {
        window.location.pathname = '/home/dashboard'
    }
    else {
        alert("Invalid username or password." );   
    }
    // what is done in a real project is loging in calling the api as below
    // const reqData = {
    //     email,
    //     password,
    // }
    // console.log(reqData)
    // query('/api/panel/admin/login', reqData)
    //     .then(resp => {
    //         console.log('====================================');
    //         console.log('login resp', resp)
    //         console.log('====================================');
    //         if (resp.data.authenticated) {
    //             dispatch({ type: 'REQUESTED_LOGIN_SUCCEEDED', user: resp.data });
    //             window.location.pathname = '/home/dashboard'
    //         }
    //         else {
    //             alert('Your email or password is incorrect')
    //         }
    //     })
    //     .catch(error => {
    //         dispatch({ type: 'REQUESTED_LOGIN_REJECTED', message: "Invalid username or password." })
    //         alert("Invalid username or password." );   
    //     })
}

export const handleLogout = () => dispatch => {
    dispatch({ type: 'REQUEST_LOGOUT' });
    localStorage['loggedIn'] = false
    window.location.pathname = '/'
}