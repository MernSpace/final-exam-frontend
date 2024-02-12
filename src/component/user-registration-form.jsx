import React from 'react';
import userStore from "../store/userStore.js";
import toast from "react-hot-toast";

const UserRegistrationForm = () => {

    const {ProfileForm,ProfileFormChange,CreateUserRequest}= userStore()


    const onSubmit =async ()=>{
            if(ProfileForm.name.length===0){
                toast.error("Name Required!")
            }
            else if(ProfileForm.email.length===0){
                toast.error("Email Required!")
            }
            else if(ProfileForm.phone.length===0){
                toast.error("Phone Required!")
            }
            else if(ProfileForm.password.length===0){
                toast.error("Password Required!")
            }
            else {
                await CreateUserRequest(ProfileForm)
                toast.success("Profile Create Success!")
            }
    }

    return (
        <div className='container'>
            <div className='row mt-5 justify-content-center align-content-center '>
                <div className='col-6 shadow rounded p-5'>
                    <input value={ProfileForm.name} onChange={(e)=>{ProfileFormChange("name",e.target.value)}} type='text' className='form-control mt-5' placeholder='Name'/>
                    <input value={ProfileForm.email} onChange={(e)=>{ProfileFormChange("email",e.target.value)}}  type='email' className='form-control mt-2' placeholder='Email'/>
                    <input value={ProfileForm.phone} onChange={(e)=>{ProfileFormChange("phone",e.target.value)}}  type='text' className='form-control mt-2' placeholder='Phone'/>
                    <input value={ProfileForm.password} onChange={(e)=>{ProfileFormChange("password",e.target.value)}}  type='password' className='form-control mt-2' placeholder='Password'/>
                    <button onClick={onSubmit} type='submit' className='btn btn-success mt-5'>Submit</button>
                </div>
            </div>

        </div>
    );
};

export default UserRegistrationForm;