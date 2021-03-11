import React, {useState, useEffect} from 'react';
import "babel-polyfill";
import axios from 'axios';
import Search from './Search.jsx';
import Graph from './Graph.jsx';

const App = () => {
    const [page, setPage] = useState('search');

    const getBuses = async (number, connections) => {
        try {
            const response = await axios.post('/key', {
                data: {
                    "number": number,
                    "connections": connections
                }
            })
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            {/* <Search setPage={setPage} getBuses={getBuses}/> */}
            <Graph />
        </div>
    )
}

export default App;