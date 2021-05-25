// import React, {Component} from 'react';
// import "./Button.css";

// class Button extends Component {

//     render(){
//         return(
//             <div 
//                 className="Button"
//                 onClick={this.props.onClick}
//                 data-size={this.props.size}
//                 data-value={this.props.value}>
//                 {this.props.label}
//             </div>
//         );
//     }
// }

// export default Button;

import React from 'react';
import PropTypes from 'prop-types';
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