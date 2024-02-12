import React, {useEffect} from 'react';
import Layout from "../layout/layout.jsx";
import productStore from "../store/productStore.js";
import {useParams} from "react-router-dom";

const DetailPage = () => {
    const {ProductDetailRequest,Details} = productStore()
    const {id}=useParams();


    useEffect(() => {
        (async ()=>{
            await ProductDetailRequest(id)
        })()
    }, [0]);
   if(Details===null){
       return(<h1>Loding...</h1>)
   }
   else {
       return (
           <Layout>
               <div className='container mt-5'>
                   <div className='row'>
                       <div className='col-8'>
                           <h1>{Details['title']}</h1>
                           <img src={Details['image']} className='w-50'/>
                           <p>{Details['remark']}</p>
                       </div>
                   </div>
               </div>
           </Layout>
       );
   }
};

export default DetailPage;