import React, { useState, useEffect } from 'react';
import '../../css/About/AboutBanners.css';
import { NavLink } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export default function AboutBanners({ text, imageUrl }){
    const [isLoadingAboutBanners, setIsLoadingAboutBanners] = useState(true);

    const aboutBreadcrumbStyle = {
        '--image-url': `url(${imageUrl})`,
    };

    useEffect(() => {
        setTimeout(() => {
          setIsLoadingAboutBanners(false);
        }, 1000);
    }, []);

    return (
        <>
            <div className="about-breadcrumb" style={aboutBreadcrumbStyle}>
                <div className="container-fluid">
                    <div className="about-breadcrumb-box">
                        { isLoadingAboutBanners ? (
                                <SkeletonTheme baseColor="#CCC" highlightColor="#82b440">
                                    <p className=""><Skeleton height={25} width={200} /></p>
                                    <p className=""><Skeleton height={15} width={140} /></p>
                                </SkeletonTheme>
                            ) : (
                                <>
                                    <h1>{text}</h1>
                                    <ul>
                                        <li><NavLink to="/">Home</NavLink></li>                            
                                        <li>{text}</li>
                                    </ul>
                                </>
                            )}
                    </div>
                </div>
            </div>
        </>
    )
}