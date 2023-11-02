import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    // Get a reference to the first component
    const firstComponentRef = useRef(null);

    // to get the current location
    const location = useLocation();

    // the useEffect hook to scroll to the first component's position when the page loads, 
    // and we're adding location to the dependency array to re-run the effect whenever 
    // the location changes
    useEffect(() => {        
        firstComponentRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [location]);

    return { firstComponentRef };
}