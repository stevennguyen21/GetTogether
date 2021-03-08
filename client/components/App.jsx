import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Search from './Search.jsx';

const App = () => {
    const [page, setPage] = useState('search');

    return (
        <div>
            <Search setPage={setPage}/>
        </div>
    )
}

export default App;