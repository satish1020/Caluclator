export const OPERATIONS_ENUM = {
    PERCENTAGE: '%',
    DIVIDE: '/',
    MULTIPLY: '*',
    SUBTRACT: '-',
    ADD: '+',
    EQUAL: '=',
    DELETE:'delete',
    STORE: 'store',
    TOGGLE: 'toggle',
    CLEAR: 'clear',
    MEMORY: 'memory'
}

export const config = {
    calculator_layout: [
        [
            {displayValue: 'AC', value: OPERATIONS_ENUM.CLEAR, type:"operator"},
            {displayValue: '+/-', value: OPERATIONS_ENUM.TOGGLE, type:"operator"},
            {displayValue: 'M', value: OPERATIONS_ENUM.MEMORY, type:"operator"},
            {displayValue: '/', value: OPERATIONS_ENUM.DIVIDE, type:"operator"},
        ],
        [
            {displayValue: '7', value: '7', type:"number"},
            {displayValue: '8', value: '8', type:"number"},
            {displayValue: '9', value: '9', type:"number"},
            {displayValue: '*', value: OPERATIONS_ENUM.MULTIPLY, type:"operator"},
        ],
        [
            {displayValue: '4', value: '4', type:"number"},
            {displayValue: '5', value: '5', type:"number"},
            {displayValue: '6', value: '6', type:"number"},
            {displayValue: '-', value: OPERATIONS_ENUM.SUBTRACT, type:"operator"},
        ],
        [
            {displayValue: '1', value: '1', type:"number"},
            {displayValue: '2', value: '2', type:"number"},
            {displayValue: '3', value: '3', type:"number"},
            {displayValue: '+', value: OPERATIONS_ENUM.ADD, type:"operator"},
        ],
        [
            {displayValue: '0', value: '0', type:"number"},
            {displayValue: '.', value: '.', type:"operator"},
            {displayValue: '=', value: OPERATIONS_ENUM.EQUAL, type:"operator"},
            {displayValue: 'del', value: OPERATIONS_ENUM.DELETE, type:"operator"},
        ],
    ]
}

