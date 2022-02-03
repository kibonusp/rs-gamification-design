import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export default function Recommendation() {
    const location = useLocation();

    useEffect(() => {
        console.log(location.state);
    }, [])

    return (
        <>
            <h1> Recommendation</h1>
        </>
    )
}