import DSATopic from "./DSATopic";
import React from "react";
import data from './450DSAFinal'
import './styles/DSA.css';

const DSA = () => {

    return (

        <>

            <div>
                {data.map((topic, index) => (
                    <DSATopic key={index} topic={topic} />
                ))}
            </div>
        </>
    );
}

export default DSA;