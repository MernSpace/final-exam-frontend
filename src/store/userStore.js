import create from 'zustand';
import axios  from "axios";
import {getEmail, unauthorized} from "../utility/utility.js";
import Cookies from "js-cookie";
const UserStore=create((set)=>({

    isLogin:()=>{
        return !!Cookies.get('token');
    },


    CreateUserRequest:async(PostBody)=>{
        try {
            set({ProfileDetails:null})
            let res=await axios.post(`http://localhost:5020/api/v1/create-user`,PostBody);
            return res.data['status'] === "success";
        }catch (e) {
            unauthorized(e.response.status)
        }
    },

    ProfileForm:{name:"",email:"",phone:"",password:""},
    ProfileFormChange:(name,value)=>{
        set((state)=>({
            ProfileForm:{
                ...state.ProfileForm,
                [name]:value
            }
        }))
    },



    LoginFormData:{email:"",password:""},
    LoginFormOnChange:(name,value)=>{
        set((state)=>({
            LoginFormData:{
                ...state.LoginFormData,
                [name]:value
            }
        }))
    },
    UserLoginRequest:async(email,password)=>{
        set({isFormSubmit:true})
        let res=await axios.post(`http://localhost:5020/api/v1/login-user/${email}/${password}`);
        set({isFormSubmit:false})
        return res.data['status'] === "success";
    },


    UserLogoutRequest:async()=>{
        set({isFormSubmit:true})
        let res=await axios.get(`http://localhost:5020/api/v1/logout`);
        set({isFormSubmit:false})
        return res.data['status'] === "success";
    },



    OTPFormData:{otp:""},
    OTPFormOnChange:(name,value)=>{
        set((state)=>({
            OTPFormData:{
                ...state.OTPFormData,
                [name]:value
            }
        }))
    },
    VerifyLoginRequest:async(otp)=>{
        set({isFormSubmit:true})
        let email= getEmail();
        let res=await axios.get(`/api/v1/VerifyLogin/${email}/${otp}`);
        set({isFormSubmit:false})
        return res.data['status'] === "success";
    },
    isFormSubmit:false,









    ProfileDetails:null,
    ProfileDetailsRequest:async()=>{
        try {
            let res=await axios.get(`/api/v1/ReadProfile`);
            if(res.data['data'].length>0){
                set({ProfileDetails:res.data['data'][0]})
                set({ProfileForm:res.data['data'][0]})
            }else{
                set({ProfileDetails:[]})
            }
        }catch (e) {
            unauthorized(e.response.status)
        }
    }




}))

export default UserStore;