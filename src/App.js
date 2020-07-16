import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/ui/Header";
import Search from "./components/ui/Search";
import CharacterGrid from "./components/characters/CharacterGrid";
import "./App.css";

const App = () => {
    // items -> state
    // setItem -> function to manipulate this state
    // starts with an empty array, and then will be filled with data from api
    const [items, setItems] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const [query, setQuery] = useState("");

    useEffect(() => {
        // promise
        const fetchItems = async () => {
            // get characters from api
            const result = await axios(
                `https://www.breakingbadapi.com/api/characters?name=${query}`
            );
            console.log(result.data);

            // saves the data inside setItems
            setItems(result.data);
            // not loading anymore, so it is false
            setIsLoading(false);
        };

        fetchItems();
    }, [query]);
    // query is a dependency, so useEffect will be fired every time query changes

    return (
        <div className="container">
            <Header />
            {/* pass the value to setQuery, which will update the state value of query */}
            <Search getQuery={(q) => setQuery(q)} />
            {/* gets the values of loading and data items, and pass it to CharacterGrid component as a prop */}
            <CharacterGrid isLoading={isLoading} items={items} />
        </div>
    );
};

export default App;
