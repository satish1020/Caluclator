import React from 'react';
import "./Button.css";

Button.propTypes = {
};

function Button(props) {
    const {onClick,label,value } = props;
    return (
            <div 
                className="Button"
                onClick={() => onClick(value)}
                data-value={value}>
                {label}
            </div>
    );
}

export default Button;