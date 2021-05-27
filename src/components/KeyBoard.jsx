import React from 'react';
import { config }  from '../Utils/Config';
import Button from './Button';
import "./KeyBoard.css";

const layout = config.calculator_layout;

KeyBoard.propTypes = {

};

function KeyBoard(props) {
	const { onNumberClick, onOperatorClick } = props;
    return (
        <div className="KeyBoard">
			{layout.map((eachRow, index) => {
				return (
					<div className="row" key={`${index}`}>
						{eachRow.map((eachButton, index)=> {
							const { displayValue, value, type} = eachButton;
							return (
								<Button label={displayValue}
										value={value}
										key={`${displayValue}${index}`}
										onClick={ type === 'number' ? () => onNumberClick(value) : () => onOperatorClick(value)}
								/>
							)
						})}
					</div>
				)
			})}
		</div>
    );
}

export default KeyBoard;