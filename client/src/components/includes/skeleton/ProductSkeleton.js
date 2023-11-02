import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export default function ProductSkeleton({ categoryProducts }){
    return (
        <>
            <SkeletonTheme baseColor="#CCC" highlightColor="#82b440">
                <div className={categoryProducts !== "" ? "col-sm-12 col-md-6 col-lg-4" : "col-sm-12 col-md-6 col-lg-6"}>
                    <div className="pa-product-box">
                        <div className="pa-product-img"> 
                            <Skeleton height={230} width={290} />  
                        </div>
                        <div className="pa-product-content">
                            <h4><Skeleton height={25} /></h4>
                            <p><Skeleton count={2} /></p>
                        </div>        
                    </div>
                </div>
            </SkeletonTheme>
        </>
    )
}