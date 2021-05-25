import { isNumber } from 'lodash';

export const containsArthimeticOperators = function(value) {
    const values = value.split('');
    let containsOperators = false;
    for(const char in values){

       if(!isNumber(values[char])){
             containsOperators = true;
             break;
       }
    }
    return containsOperators;
}