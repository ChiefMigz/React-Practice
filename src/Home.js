import { useState, useEffect } from "react"
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setTimeout(() => { //simulate idea (don't do in real application)
            fetch('http://localhost:8000/blogs')
            .then(response => {
                if (!response.ok)
                    throw Error('Could not fetch the dt for that resource');
                return response.json()
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
            })
            .catch(err => {
                console.log(err.message);
                setError(true);
            });
        }, 1000);
    }, []);

    return ( 
        <div className="home">
            {isPending && <div>Loading...</div>}
            {error && <div>{err.message}</div>}
            {blogs && <BlogList blogs={blogs} title={'All blogs'} />}
        </div>
     );
}
 
export default Home; 