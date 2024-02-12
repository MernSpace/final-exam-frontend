import React, {useEffect} from 'react';
import Layout from "../layout/layout.jsx";
import productStore from "../store/productStore.js";
import Product from "../component/product.jsx";


const HomePage = () => {
    const{ProductListRequest} = productStore()

    useEffect(() => {
        (async ()=>{
            await ProductListRequest()
        })()
    }, [0]);
    return (
        <Layout>
            <Product/>
        </Layout>
    );
};

export default HomePage;