import React, { useState } from 'react';
import './Search.scss';

const Search = (props) => {
    const [number, setNumber] = useState('');
    const [connections, setConnections] = useState('')

    return (
        <div className="search-outer">
            <div className="search-inner">
                <div>
                    Bus Number:
                    <input type="search" value={number} onChange={(e) => {setNumber(e.target.value)}}></input>
                </div>
                <div>
                    Number of Connections:
                    <input type="search" value={connections} onChange={(e) => {setConnections(e.target.value)}}></input>
                </div>
                <div>
                    <button onClick={() => 
                        {
                            props.setPage("home");
                            props.getBuses(70050, 2);
                        }}>
                            Go
                        </button>
                </div>
            </div>
        </div>
    )
}

export default Search;