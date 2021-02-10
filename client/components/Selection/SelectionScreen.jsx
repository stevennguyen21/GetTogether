import React, { useState } from 'react';
import './SelectionScreen.css';
import SelectionPanel from './SelectionPanel.jsx';
import SelectionCarousel from './SelectionCarousel.jsx';

const SelectionScreen = () => {
    const [seasons, setSeasons] = useState(['Winter', 'Spring', 'Summer', 'Fall']);

    return (
        <div>
            <div className="container-fluid-padding">
                <div className="row text-center">
                    <div className="col-12">
                        <h1 className="display-4">
                            Seasons
                        </h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <SelectionCarousel />
                </div>
            </div>
            <div className="container-fluid-padding">
                <div className="row text-center padding">
                    {
                        seasons.map((season, index) => (
                            <SelectionPanel season={season} key={index}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SelectionScreen;