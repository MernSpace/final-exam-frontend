import React, {useState} from 'react';
import ProductStore from "../store/productStore.js";

const ProductForm = () => {

    const {ProductCreateRequest,ProductForm,ProductFormChange} = ProductStore()

    const onSubmit=async ()=>{
        await ProductCreateRequest(ProductForm)
    }


    return (
        <div className='container'>
            <div className='row justify-content-center p-5 rounded shadow mt-5'>
                <div className='col-8'>
                    <h1>Create Product</h1>
                    <input value={ProductForm.title} onChange={(e)=>{ProductFormChange("title",e.target.value)}} type='text' className='form-control ' placeholder='Title'/>
                    <input value={ProductForm.image} onChange={(e)=>{ProductFormChange("image",e.target.value)}} type='text' className='form-control mt-3' placeholder='Image'/>
                    <input value={ProductForm.remark} onChange={(e)=>{ProductFormChange("remark",e.target.value)}} type='text' className='form-control mt-3' placeholder='Remark'/>
                    <input value={ProductForm.categoryID} onChange={(e)=>{ProductFormChange("categoryID",e.target.value)}} type='text' className='form-control mt-3' placeholder='category'/>
                    <input value={ProductForm.brandID} onChange={(e)=>{ProductFormChange("brandID",e.target.value)}} type='text' className='form-control mt-3' placeholder='category'/>
                    <button onClick={onSubmit} className='btn btn-success mt-5'>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default ProductForm;