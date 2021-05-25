import React, { useState } from 'react';
import Keyboard from './KeyBoard';
import Display from '../components/Display';
import { OPERATIONS_ENUM }  from '../Utils/Config';

const Calculator = () => {
    const [data, setData] =useState('');
    const [operation, setOperations] = useState();
    const [store, setStore] = useState('');

    const handleKeyStrokeValue = (value) => {
        switch(value) {
            case OPERATIONS_ENUM.EQUAL: {
                let result = eval(data);
                setData(result);
                break;
            }
            case OPERATIONS_ENUM.DELETE: {
                // let newResult = data.substring(0, data.length - 1);
                 let newResult = data.toString().slice(0, -1);
                setData(newResult);
                break;
            }   
            case OPERATIONS_ENUM.TOOGLE: {
                let newResult = data.toString().slice(0, -1);
                setData(newResult);
                break;
            }
            case OPERATIONS_ENUM.STORE: {
                setStore()
            }
            default: {
                setData(`${data}${value}`);
            }
        }

    }

    return (
        <div className="mainContainer">
            <Display data={data} />
            <Keyboard onClickOfKey={handleKeyStrokeValue}/>
        </div>
    );
};

export default Calculator;