import React, {useEffect, useState} from 'react'
import ScrollToFirstComponent from './includes/ScrollToTop/ScrollToFirstComponent';
import AboutBanners from './includes/About/AboutBanners';
import AboutBannerImage from "../images/1143_240.webp";
import ProductDetailPage from "./includes/ProductDetail/ProductDetailPage"
import { useParams } from 'react-router-dom';

export default function ProductDetail(){
    var { producturl } = useParams();
    var [productDetail, setProductDetail] = useState({});

    useEffect(() => {
        const fetchProductDetail = async () => {
          try {            
            var url;
            if (typeof(producturl) !== 'undefined') {                 
                url = `${process.env.REACT_APP_HTTP_KEY}/getproductdetail/${producturl}`;
            }

            const res = await fetch(url, {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              credentials: 'include'
            });
    
            const data = await res.json();
            console.log(data.message);
            setProductDetail(data.productDetail);
    
            if (!data.status === 200) {
              const error = new Error(res.error);
              throw error;
            }
          } catch (err) {
            console.log(err);
          }
        };
    
        setTimeout(() => { 
            fetchProductDetail();
        }, 0)
    }, [producturl]);
    

    return (
        <>
            {/* scroll to the first component's position when the page loads */}
            <div ref={ScrollToFirstComponent().firstComponentRef} />

            {/* Product Detail Headers section */}
            <AboutBanners text={productDetail.productname} imageUrl={AboutBannerImage} />

            {/* product detail section  */}
            <ProductDetailPage />
        </>
    )
}