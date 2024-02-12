import React from 'react';
import userStore from "../store/userStore.js";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const UserLoginForm = () => {
    let navigate=useNavigate();

    const {LoginFormData,LoginFormOnChange,UserLoginRequest} = userStore();
    const onLogin =async ()=>{
        if(LoginFormData.email.length===0){
            toast.error("Email Require!")
        }
        else if(LoginFormData.password.length===0){
            toast.error("Password Require!")
        }
        else {
            await UserLoginRequest(LoginFormData.email,LoginFormData.password)
            navigate("/")

        }

    }
    return (
        <div className='container  '>
            <div className='row justify-content-center align-content-center mt-5'>
                <div className='col-md-6 shadow p-5 rounded'>
                    <input value={LoginFormData.email} onChange={(e)=>{LoginFormOnChange("email",e.target.value)}} type='email' className='form-control mt-1' placeholder='Email'/>
                    <input value={LoginFormData.password} onChange={(e)=>{LoginFormOnChange("password",e.target.value)}} type='password' className='form-control mt-1' placeholder='Password'/>
                    <button onClick={onLogin} className='btn btn-success mt-1'>Login</button>
                </div>
            </div>
        </div>
    );
};

export default UserLoginForm;