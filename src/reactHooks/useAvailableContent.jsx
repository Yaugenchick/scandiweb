import { useState, useEffect, useRef } from 'react';

function useAvailableContent({ controls }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const refButtonPrew = useRef();
    const refButtonNext = useRef();
    useEffect(() => {
        if (controls === true) {
            refButtonNext.current.focus();
            refButtonPrew.current.focus();
        } else {
            return false;
        }
    }, [controls]);
    return {
        activeIndex,
        setActiveIndex,
        refButtonPrew,
        refButtonNext,
    };
}
export default useAvailableContent;
