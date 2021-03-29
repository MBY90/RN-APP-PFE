import {LOGOUT,REGESTER,LOGIN,USER_LOADING} from '../actions/types';
import getToken from '../ManageToken/getToken';
import setToken from '../ManageToken/setToken';
import removeToken from '../ManageToken/removeToken';

const  initialLoginState= {
    isLoading :false,
    userName:null,
    userToken:getToken(),
    isAuthenticated: null,
   
   };
 
 const authReducer=(prevState,action)=>{
 
   switch(action.type){
    case USER_LOADING:
      return {
        ...prevState,
        isLoading: true
      };
      case LOGOUT:
          removeToken();
       return {
         ...prevState,
         isAuthenticated: false,
         isLoading: false,
         userToken:null,
         userName:null
       };
       case REGESTER:
        setToken('token',action.payload.token);
         return {
           ...prevState,
           ...action.payload,
           isLoading: false,
           isAuthenticated: true,
         }
         case LOGIN :
            setToken('token',action.payload.token);
           return { 
               ...prevState,
             ...action.payload,
             isLoading: false,
             isAuthenticated: true,
           };
           default:
               prevState;
   }
 }
export default authReducer;