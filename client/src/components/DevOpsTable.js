import React from 'react';
import '../styles/DevOpsTable.css';
import data from '../data/sampledata.json';

const DevOpsTable = () => {
    return (
        <div className="devops-table">
            {data.elements.map((element) => (
                <div key={element.name}>{element.symbol}</div>
            ))}
        </div>
    );
};

export default DevOpsTable;
