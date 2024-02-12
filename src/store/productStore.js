import create from "zustand";
import axios from "axios";

const ProductStore=create((set)=>({
    BrandList:null,
    CategoryList:null,
    ListProduct:null,
    ListByRemark:null,
    Details:null,
    SearchKeyword:"",

    SetSearchKeyword:async (keyword)=>{
        set({SearchKeyword:keyword})
    },


    ProductForm:{title:"",image:"",remark:"",categoryID:"65c8a88f033f71f3170d59b6",brandID:"65c8a9c8be63b95ef1bf3753"},
    ProductFormChange:(name,value)=>{
        set((state)=>({
            ProductForm:{
                ...state.ProductForm,
                [name]:value
            }
        }))
    },


    ProductCreateRequest:async (postBody)=>{
        let res= await axios.post("http://localhost:5020/api/v1/create-product",postBody);
    },




    ProductDetailRequest:async (id)=>{
        let res= await axios.get(`http://localhost:5020/api/v1/product-detail/${id}`);
        if(res.data['status']==="success"){
            set({Details:res.data['data']})
        }
    },


    ProductListRequest:async ()=>{
        let res= await axios.get("http://localhost:5020/api/v1/read-product");
        if(res.data['status']==="success"){
            set({ListProduct:res.data['data']})
        }
    },

    BrandListRequest:async ()=>{
        let res= await axios.get("http://localhost:5020/api/v1/read-brand");
        if(res.data['status']==="success"){
            set({BrandList:res.data['data']})
        }
    },
    CategoryListRequest:async ()=>{
        let res= await axios.get("http://localhost:5020/api/v1/read-category");
        if(res.data['status']==="success"){
            set({CategoryList:res.data['data']})
        }
    },

    ListByBrandRequest:async (BrandID)=>{
        set({ListProduct:null})
        let res= await axios.get(`/api/v1/ProductListByBrand/${BrandID}`);
        if(res.data['status']==="success"){
            set({ListProduct:res.data['data']})
        }
    },
    ListByKeywordRequest:async (Keyword)=>{
        set({ListProduct:null})
        let res= await axios.get(`/api/v1/ProductListByKeyword/${Keyword}`);
        if(res.data['status']==="success"){
            set({ ListProduct:res.data['data']})
        }
    },

    ListByCategoryRequest:async (CategoryID)=>{
        set({ListProduct:null})
        let res= await axios.get(`/api/v1/ProductListByCategory/${CategoryID}`);
        if(res.data['status']==="success"){
            set({ListProduct:res.data['data']})
        }
    },


    ListByFilterRequest:async (CategoryID)=>{
        set({ListProduct:null})
        let res= await axios.get(`/api/v1/ProductListByCategory/${CategoryID}`);
        if(res.data['status']==="success"){
            set({ListProduct:res.data['data']})
        }
    },





    ListByRemarkRequest:async (Remark)=>{
        let res= await axios.get(`/api/v1/ProductListByRemark/${Remark}`);
        if(res.data['status']==="success"){
            set({ ListByRemark:res.data['data']})
        }
    },

    DetailsRequest:async (ProductID)=>{
        let res= await axios.get(`/api/v1/ProductDetails/${ProductID}`);
        if(res.data['status']==="success"){
            set({ Details:res.data['data']})
        }
    },


}))


export  default  ProductStore