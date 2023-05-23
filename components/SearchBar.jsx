import React from "react";

const SearchBar = ({
    handleSubmit, 
    query, // value av search query
    isLoading, // checkar ifall search pågår
    setQuery // updaterar search query
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={query} 
                className="form-control"
                placeholder="Search Recipe"
                name="query"
                disabled={isLoading} // gör så att input slutar fungera om en search pågår
                onChange={(event) => setQuery(event.target.value)} 
            />   
            <input
                disabled={isLoading || !query} // Gör så att submit button slutar fungera om en searcg pågår
                type="submit"
                className="btn"
                value="Search"
            />
        </form>
    )
};

export default SearchBar;
