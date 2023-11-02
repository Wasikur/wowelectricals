import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export default function ProductSidebarSkeleton(){
    return (
        <>
            <SkeletonTheme baseColor="#CCC" highlightColor="#82b440">
                <div className="pa-widget pa-shop-category">
                    <h2 className="pa-sidebar-title"><Skeleton height={30} /></h2>                    
                    <p className="skelton_margin_block"><Skeleton count={5} height={20} /></p>                                    
                </div>                
            </SkeletonTheme>
        </>
    )
}