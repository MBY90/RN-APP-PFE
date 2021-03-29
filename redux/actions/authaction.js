import {LOGOUT,REGESTER,LOGIN,USER_LOADING} from '../actions/types';
import getToken from '../ManageToken/getToken';
import setToken from '../ManageToken/setToken';
import removeToken from '../ManageToken/removeToken';
import axios from 'axios';
import { Header } from 'react-native/Libraries/NewAppScreen';

export const loadUser =()=>(dispatch,getState)=>{
dispatch({tyoe:USER_LOADING});
axios
.get('api/auth/user',tokenConfig(getState))
.then(res=>
    dispatch({
        payload:res.data
    })
    )
    .catch(err => {
        dispatch(console.log('LOAD USER FAILED'));
      });

};
export const SignUp =({email,password})=>dispatch=>{
    //Headers
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    };
   //Request Body
   const body=JSON.stringify({email,password}) ;
   axios
   .post('api/users',body,config)
   .then(res=>
    dispatch({
        type:REGESTER,
        payload:res.data
    })
    )
 .catch (err=>
    {
        dispatch(
            console.log('REGISTER_FAIL')
        );

    }
    );

 
};
//Login User
export const SignIn=({email,password})=>dispatch=>{
 //Headers
 const config={
    headers:{
        'Content-Type':'application/json'
    }
};
//request body
const body =JSON.stringify({email,password});
axios
.post('/api/auth',body,config)
.then(res=>
    dispatch({
        payload:res.data,
        type:LOGIN
    })
    )
    .catch(err=>{dispatch(
        console.log('LOGIN_FAIL')
    );}
        
        )


};
//User logout
export const SignOut=()=>{
    return{
        type:LOGOUT
    };

};
export const tokenConfig=(getState)=>{
    const token =getState().auth.token;
    //Headers
    const confi={
        headers:{
            'Content-type': 'application/json'  
        }
    };
    //if token add to headers
    if(token){
        config.headers['x-auth-token']=token;
    }
    return config;

};