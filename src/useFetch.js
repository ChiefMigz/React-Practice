import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        setTimeout(() => { //simulate idea (don't do in real application)
            fetch(url)
            .then(response => {
                if (!response.ok)
                    throw Error('Could not fetch the dt for that resource');
                return response.json()
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                setIsPending(false);
            });
        }, 1000);
    }, []);

    return {data, isPending, error}
}

export default useFetch;