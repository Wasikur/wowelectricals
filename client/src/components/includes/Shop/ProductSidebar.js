import React, {useEffect, useState} from 'react'
import '../../css/Shop/ProductSidebar.css';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ProductSidebarSkeleton from "../skeleton/ProductSidebarSkeleton"
import ProductSearch from "../Shop/ProductSearch";

export default function ProductSidebar(){
    var { categoryurl } = useParams();
    const [categorys, setCategorys] = useState([]);
    const [categoryCounts, setCategoryCounts] = useState({});
    const [isLoadingSidebar, setIsLoadingSidebar] = useState(true);

    const callCategoryData = async () => {
        try{
            const res = await fetch(`${process.env.REACT_APP_HTTP_KEY}/getcategory`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            console.log(data.message);
            setCategorys(data.categoryData);
            setCategoryCounts(data.categoryCounts);
            setIsLoadingSidebar(false);

            if(!data.status === 200){
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        setTimeout(() => { 
            callCategoryData();
        }, 0)  
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <div className="pa-product-sidebar">
                
                <div className="pa-widget pa-search">
                    <ProductSearch />
                </div>

                {
                    isLoadingSidebar
                    ?
                    <>                        
                        <ProductSidebarSkeleton />
                    </>  
                    :
                    <div className="pa-widget pa-shop-category">
                        <h2 className="pa-sidebar-title">Categories</h2>                    
                        <ul>
                            {categorys.map(category => (
                                <li key={category._id}>
                                    <NavLink className={categoryurl === category.categoryurl ? 'active' : ''} to={`/shop/${category.categoryurl}`}>{category.categoryname} <span>{categoryCounts[category.categoryid] || 0}</span></NavLink>
                                </li>
                            ))}
                        </ul>                                    
                    </div>
                }

                {/* <div className="pa-widget pa-product-widget">
                    <h2 className="pa-sidebar-title">Top poducts</h2>
                    <ul>
                        <li>
                            <div className="pa-pro-wid-img">
                                <img src="https://dummyimage.com/58x54/" alt="image" className="img-fluid" />
                            </div>
                            <div className="pa-pro-wid-content">
                                <h4><a href="javascript:;">Black Organic Tea</a></h4>
                                <p>Gt enim ad minim veniam, quis nostrud exerci</p>
                            </div>
                        </li>
                        <li>
                            <div className="pa-pro-wid-img">
                                <img src="https://dummyimage.com/58x54/" alt="image" className="img-fluid" />
                            </div>
                            <div className="pa-pro-wid-content">
                                <h4><a href="javascript:;">Loose Leaf Tea</a></h4>
                                <p>Vt enim ad minim veniam quis nostrud exerci</p>
                            </div>
                        </li>
                        <li>
                            <div className="pa-pro-wid-img">
                                <img src="https://dummyimage.com/58x54/" alt="image" className="img-fluid" />
                            </div>
                            <div className="pa-pro-wid-content">
                                <h4><a href="javascript:;">Green Tea</a></h4>
                                <p>Mt enim ad minim veniam quis nostrud exerci</p>
                            </div>
                        </li>
                    </ul>
                </div> */}

                {/* <div className="pa-widget pa-tag">
                    <h2 className="pa-sidebar-title">Tag clouds</h2>
                    <ul>
                        <li><a href="javascript:;">product</a></li>
                        <li><a href="javascript:;">Ayurveda</a></li>
                        <li><a href="javascript:;">pure</a></li>
                        <li><a href="javascript:;">trending</a></li>
                        <li><a href="javascript:;">herbal</a></li>
                        <li><a href="javascript:;">healthy</a></li>
                        <li><a href="javascript:;">product</a></li>
                        <li><a href="javascript:;">Ayurveda</a></li>
                        <li><a href="javascript:;">trending</a></li>
                        <li><a href="javascript:;">pure</a></li>
                        <li><a href="javascript:;">herbal</a></li>
                        <li><a href="javascript:;">healthy</a></li>
                    </ul>
                </div> */}

            </div>
        </>
    )
}




