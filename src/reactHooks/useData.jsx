import { useState, useEffect } from 'react';

function useData({ children }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        if (!children.length) {
            return false;
        } else {
            setData(children);
        }
    }, [children]);

    return { data };
}
export default useData;
