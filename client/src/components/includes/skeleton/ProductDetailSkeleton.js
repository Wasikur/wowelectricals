import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export default function ProductDetailSkeleton(){
    return (
        <>
            <SkeletonTheme baseColor="#CCC" highlightColor="#82b440">
                <div className="row">
                    <div className="col-sm-5">
                        <div className="pa-prod-thumb-img fullscreen-gallery">
                            <Skeleton height={230} width={270} />
                        </div>
                        <div className="imgbox">
                            <Skeleton height={60} width={90} count={3} />
                        </div>
                    </div>

                    <div className="col-sm-7">
                        <div className="pa-prod-content">
                            <h2 className="pa-prod-title"><Skeleton height={40} /></h2>
                            <h2 className="pa-prod-title skelton_margin_block"><Skeleton height={25} count={3} /></h2>
                            <p><Skeleton count={4} /></p>
                        </div>
                    </div>                    

                    <div className="col-md-12 mt-5 producttab">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <button className="nav-link active"><Skeleton height={30} width={90} /></button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link"><Skeleton height={30} width={90} /></button>
                            </li>
                        </ul>

                        <div className="tab-content mt-3">
                            <div className="tab-pane active">
                                <p><Skeleton count={2} /><Skeleton width={200} /></p>
                                <p className="mt-3">
                                    <Skeleton width={90} />
                                    <Skeleton count={1} />
                                    <Skeleton width={160} />
                                </p>
                                <p className="mt-3">
                                    <Skeleton width={90} />
                                    <Skeleton count={1} />
                                </p>
                            </div>
                        </div>  
                    </div>
                </div>                
            </SkeletonTheme>
        </>
    )
}