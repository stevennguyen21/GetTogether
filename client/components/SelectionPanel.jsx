import React from 'react';

const SelectionPanel = (props) => {
    return (
        <div className="col-xs-12 col-xxl-6">
            <div className="card">
                <h3>{props.season}</h3>
            </div>
        </div>
    )
}

export default SelectionPanel;