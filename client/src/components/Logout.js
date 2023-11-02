import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../App";
import ScrollToFirstComponent from './includes/ScrollToTop/ScrollToFirstComponent';

export default function Logout(){

    const {dispatch} = useContext(UserContext);
    const navigate = useNavigate();

    //promises
    useEffect(() => {
        fetch('/logout', {
            method: "GET",
            header: {
                Accept: "appllication/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
            dispatch({type:"USER", payload:false})
            navigate('/login', { replace: true });
            if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err) => {
            console.log(err);
        });
    });

    

    return (
        <>
            {/* scroll to the first component's position when the page loads */}
            <div ref={ScrollToFirstComponent().firstComponentRef} />

            <h1> Logout ka page </h1>
        </>
    )
}