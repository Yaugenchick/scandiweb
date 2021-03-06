import { useState } from 'react';

function useAnimation() {
    const [controlsForAnimation, setControlsForAnimation] = useState({
        next: false,
        prew: false,
        dots: false,
    });
    const [dotsIndex, setDotsIndex] = useState({
        prewIndex: 0,
        currentIndex: 0,
    });

    return {
        controlsForAnimation,
        setControlsForAnimation,
        dotsIndex,
        setDotsIndex,
    };
}
export default useAnimation;
