import React, { useState } from 'react';
import { isEmpty, isNaN } from 'lodash';
import Keyboard from './KeyBoard';
import Display from '../components/Display';
import { OPERATIONS_ENUM }  from '../Utils/Config';
import {containsArthimeticOperators} from '../Utils/utils';

const Calculator = () => {
    const [data, setData] =useState('');
    const [operation, setOperation] = useState([]);
    const [store, setStore] = useState('');
    const [number, setNumber] = useState('');

    const handleNumberClick = (value) => {
        setData(`${data}${value}`);
        setNumber(`${number}${value}`);
    }

    const handleOperatorClick = (value) => {

        switch(value) {
            case OPERATIONS_ENUM.EQUAL: {
                let allOperations = operation;
                if(!isEmpty(number)){
                    allOperations = [...operation, `${number}`, value];
                    setNumber('');
                }else {
                    allOperations = [...operation, value];

                }
                let result = eval(data);
                setData(`${result}`);
                allOperations = [...allOperations, `${result}`];
                setOperation(allOperations);
                break;
            }
            case OPERATIONS_ENUM.DELETE: {
                let newResult = data.toString().slice(0, -1);
                setData(`${newResult}`);
                break;
            }
            case OPERATIONS_ENUM.TOGGLE: {
                let containsOperator = containsArthimeticOperators(data);
                if(containsOperator){
                    let result = eval(data);
                    setData(`${-(result)}`);
                } else {
                    let newResult = parseInt(data);
                    if(!isNaN(newResult)){
                        setData(`${-(newResult)}`);
                    }
                }
                break;
            }
            case OPERATIONS_ENUM.CLEAR: {
                setData('');
                break;
            }
            case OPERATIONS_ENUM.MEMORY: {
                if(!isEmpty(operation)){
                    let result = operation.join('');
                    setData(`${result}`);
                }
                break;
            }
            default: {
                // if we delete all the elements and dot the operation then undefined coming

                if(!isEmpty(data)){
                    let newValue = `${data}${value}`;
                    setData(newValue);
                    if(!isEmpty(number)){
                        setOperation([...operation, `${number}`, value]);
                        setNumber('');
                    }else {
                        setOperation([...operation, value]);
                    }
                } else {
                    setData('');
                    setOperation([...operation, value]);
                }

            }
        }
    }

    console.log('********* operations', operation);
    return (
        <div className="mainContainer">
            <Display data={data} />
            <Keyboard onNumberClick={handleNumberClick}
                      onOperatorClick={handleOperatorClick}/>
        </div>
    );
};

export default Calculator;