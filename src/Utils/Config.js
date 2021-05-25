export const OPERATIONS_ENUM = {
    PERCENTAGE: '%',
    DIVIDE: '/',
    MULTIPLY: '*',
    SUBTRACT: '-',
    ADD: '+',
    EQUAL: '=',
    DELETE:'delete',
    STORE: 'store',
    TOOGLE: 'toggle',
    CLEAR: 'clear'
}

export const config = {
    calculator_layout: [
        [ 
            {displayValue: 'AC', value: OPERATIONS_ENUM.CLEAR},
            {displayValue: '+/-', value: OPERATIONS_ENUM.TOOGLE},
            {displayValue: 'Ans', value: OPERATIONS_ENUM.STORE},
            {displayValue: '/', value: OPERATIONS_ENUM.DIVIDE},
        ],
        [ 
            {displayValue: '7', value: 7},
            {displayValue: '8', value: 8},
            {displayValue: '9', value: 9},
            {displayValue: '*', value: OPERATIONS_ENUM.MULTIPLY},
        ],
        [ 
            {displayValue: '4', value: 4},
            {displayValue: '5', value: 5},
            {displayValue: '6', value: 6},
            {displayValue: '-', value: OPERATIONS_ENUM.SUBTRACT},
        ],
        [ 
            {displayValue: '1', value: 1},
            {displayValue: '2', value: 2},
            {displayValue: '3', value: 3},
            {displayValue: '+', value: OPERATIONS_ENUM.ADD},
        ],
        [ 
            {displayValue: '0', value: 0},
            {displayValue: '.', value: '.'},
            {displayValue: '=', value: OPERATIONS_ENUM.EQUAL},
            {displayValue: 'del', value: OPERATIONS_ENUM.DELETE},
        ],
    ]
}

