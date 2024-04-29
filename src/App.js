import React, { useState, useEffect, useCallback } from "react";

function App() {

    const [resource, setResource] = useState("users");
    const [data, setData] = useState([]);

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${resource}`);
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, [resource]);

    useEffect(() => {
        fetchData();
    }, [resource, fetchData]);

    const handleClick = (event, newResource) => {
        event.preventDefault();
        setResource(newResource);
    };

    return (
        <div>
            <div>
                <button onClick={(event) => handleClick(event, 'users')}>Users</button>
                <button onClick={(event) => handleClick(event, 'posts')}>Posts</button>
                <button onClick={(event) => handleClick(event, 'comments')}>Comments</button>
            </div>
            <div>
                <ul>
                    {data.map((item, index) => (
                        <li key={index}>{JSON.stringify(item)}</li>
                    ))}
                </ul>
            </div>
        </div>
    );

}

export default App;
