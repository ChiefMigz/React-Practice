import { useState } from "react"

const Home = () => {

    const [name, setName] = useState('mario');
    const [age, setAge] = useState(33);

    const handleClick = () => {
        setName('luigi');
        setAge(25);
    }

    // const handleClickAgain = (name) => {
    //     console.log("Hello, " + name);
    // }<button onClick={() => handleClickAgain("Mario")}>Click me</button>

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>Click Me!</button>
        </div>
     );
}
 
export default Home; 