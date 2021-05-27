import React from 'react';
import "./Display.css";

function Display(props) {
    const{data} = props;
    return (
                   <div className="Display">
                {data}
            </div>
    );
}

export default Display;