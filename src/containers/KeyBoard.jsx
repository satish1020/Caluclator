import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { config }  from '../Utils/Config';
import Button from '../components/Button';
import "./KeyBoard.css";

const layout = config.calculator_layout;

KeyBoard.propTypes = {
    
};

function KeyBoard(props) {
	const { onClickOfKey } = props;
    //     const [data,setData] = useState('');

    //     const [operations, setOperations] = useState([]);
    //     const [numberStored, setNumberStored] = useState(null);

	// 	const layout = Config.calculator_layout;

    //     const calculate = (data) => {
    //         try {
    //             // const result = eval(this.state.data);
	// 			// this.setState({data: result});
	// 			const {setCurrentText} = props;
	// 			setCurrentText(data);
    //             setOperations(data);
                
    //         } catch (e) {
    //             // this.setState({data: 'error'})
    //             setOperations('error');
    //         }
    //     }

    // 	//TODO - make the private methods.
	// const getCurrentOperation = (nums, operationType) => {
	// 	return ({
	// 		nums,
	// 		operationType
	// 	})
	// }
	// //TODO - make the private methods.
	// const updateOperations = (currentOperation) => {
	// 	/*
	// 		{
	// 		nums: [1,2,3],
	// 		operation: '+'
	// 	}
	// 	this.operations[{
	// 		nums: [1,2,3],
	// 		operation: '+'
	// 	}]
	// 	*/
	// 	if (this.operations.length) {
    //         setOperations(operations, currentOperation);
	// 		// this.operations = [...this.operations, currentOperation]
	// 	} else {
    //         // this.operations = [currentOperation]
    //         setOperations(currentOperation);
	// 	}
    // }
    
    // // eslint-disable-next-line 
	// const add = (...args) =>{
	// 	// [1,2,3];
	// //	let result = args[0];
	// 	// 1

	// 	const currentOperation = getCurrentOperation(args, '+');
	// 	/*
	// 	{
	// 		nums: [1,2,3],
	// 		operation: '+'
	// 	}
	// 	*/
	//     updateOperations(currentOperation);

	// //	args.shift();

	// 	let result = 0;
		
	// 	for(const element of args){
	// 		result += element;
	// 	}
	// 	return result // 6
	// }

    // // eslint-disable-next-line 
    // const 	subtract = (...args) =>{
	// 	let result = args[0];
	
	// 	const currentOperation = getCurrentOperation(args, '-');
	// 	updateOperations(currentOperation);

	// 	args.shift();
		
	// 	//Minor - can be moved to common method.
	// 	for(const element of args){
	// 		result -= element;
	// 	}
	// 	return result;
	// }

    // // eslint-disable-next-line 
    // const 	multiply = (...args) =>{
	// 	let result = args[0];

	// 	const currentOperation = getCurrentOperation(args, '*')
	//     updateOperations(currentOperation);

	// 	args.shift();

	// 	for(const element of args){
	// 		result *= element;
	// 	}
	// 	return result;
	// }

    // // eslint-disable-next-line 
	// const divide = (...args) => {
	// 	let result = args[0];

	// 	const currentOperation = getCurrentOperation(args , '/')
	// 	this.updateOperations(currentOperation);

	// 	args.shift();

	// 	for(const element of args){
	// 		result /= element;
	// 	}
	// 	return result;
	// }

    // // eslint-disable-next-line 
	// const store = (num) =>{
    //     setNumberStored(num);
	// }

    // // eslint-disable-next-line 
	// const Delete = (num) =>{
	// 	const numString = num.toString();
	// 	// remove the last char from string
	// 	const updatedNumString = numString.slice(0, -1);
	// 	return parseInt(updatedNumString, 10);
	// }

    // // eslint-disable-next-line 
	// const toggle = (num) => {
	// 	return num * (-1)
	// }

	// const reset = () => {
    //     setOperations([]);
    //     setNumberStored(null);
	// }

    // const handleClick = (dataValue) => {
 	// 	const {setCurrentText} = props;
	// 	// alert(dataValue);
	// 	// const value = e.target.getAttribute('data-value');
	// 	// setCurrentText(value);
    //     switch(dataValue) {
    //         // case 'add' :
    //         //     add(value);
    //         //     break;
    //         // case 'divide' :
    //         //     divide(value);
    //         //     break;
    //         // case 'multiply':
    //         //     multiply(value);
    //         //     break;
    //         // case 'subtract':
    //         //     subtract(value);
    //         //     break;
    //         case 'clear':
    //             reset(dataValue);
    //             break;
    //         // case 'delete':
    //         //     Delete(value);
    //         //     break;
    //         case 'equal':
    //             calculate(data);
    //             break;
    //         // case 'toggle':
    //         //     toggle(value);
    //         //     break;
    //         // case 'store':
    //         //     store(value);
    //         //     break;
    //         default:
    //             setData(data + dataValue);
    //     }
    // }
    return (
        <div className="KeyBoard">
			{layout.map((eachRow, index) => {
				return (
					<div className="row" key={`${index}`}>
						{eachRow.map((eachButton, index)=> {
							const { displayValue, value} = eachButton;
							return (
								<Button label={displayValue} value={value} key={`${displayValue}${index}`} onClick ={() => onClickOfKey(value)}/>
							)
						})}
					</div>
				)
			})}
		</div>
    );
}

export default KeyBoard;