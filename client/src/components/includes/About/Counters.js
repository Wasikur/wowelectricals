import React, { useState, useEffect } from 'react';

export default function Counters({ targetValue, incrementInterval }){
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          if (counter < targetValue) {
            setCounter(counter + 1);
          }
        }, incrementInterval);
    
        return () => clearInterval(interval);
    }, [counter, targetValue, incrementInterval]);

    return <>{counter}</>;
}