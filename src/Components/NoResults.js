import React from 'react'
// basic page for if a user inputs a term that gets no image response from flickr.
const NoResult = () => {
    return (
        <li className="not-found">
            <h2>No Results Found</h2>
            <p>Your search returned 0 results, attempt a new search.</p>
        </li>
    );
}

export default NoResult;
