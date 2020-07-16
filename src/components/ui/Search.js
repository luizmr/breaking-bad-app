import React, { useState } from "react";

const Search = ({ getQuery }) => {
    const [text, setText] = useState("");

    // call this function, where q is the text inside input
    // it calls setText and a function getQuery, defined inside App.js (parent component)
    // getQuery was passed to it as props
    const onChange = (q) => {
        setText(q);
        getQuery(q);
    };
    return (
        <section className="search">
            {/* forms always work with state */}
            <form>
                <input
                    type="text"
                    placeholder="Search characters ..."
                    className="form-control"
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                    autoFocus
                />
                {/* onChange -> every letter you text, it will be put inside text, through props onChange */}
            </form>
        </section>
    );
};

export default Search;
