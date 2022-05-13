import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const abortCont = new AbortController(); //associate it with fetch request, then use this to stop the fetch
        setTimeout(() => { //simulate idea (don't do in real application)
            fetch(url, {signal: abortCont.signal}) //associating abort controller with fetch
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
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                }
                else {
                    setError(err.message);
                    setIsPending(false);
                }
            });
        }, 1000);

        return()=> abortCont.abort(); //abort whatever fetch it is associated with (fetch)
    }, [url]);

    return {data, isPending, error}
}

export default useFetch;