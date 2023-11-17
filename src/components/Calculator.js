import React, { useState } from 'react';
import * as math from 'mathjs';
import '../Calculator.css';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const handleNumberClick = (number) => {
        setInput((prevInput) => prevInput + number);
    };

    const handleOperatorClick = (operator) => {
        if (input !== '') {
            setOutput((prevOutput) => prevOutput + input + operator);
            setInput('');
        }
    };

    const handleDecimalClick = () => {
        if (!input.includes('.')) {
            setInput((prevInput) => prevInput + '.');
        }
    };

    const handleClearClick = () => {
        setInput('');
        setOutput('');
    };

    const handleEqualsClick = () => {
        if (input !== '') {
            try {
                const result = math.evaluate(output + input);
                setInput(result.toString());
                setOutput('');
            } catch (error) {
                setInput('Error');
                setOutput('');
            }
        }
    };

    return (
        <div className="calculator">
            <div id="display" className="display">
                {input || '0'}
            </div>
            <button id="zero" onClick={() => handleNumberClick('0')}>0</button>
            <button id="one" onClick={() => handleNumberClick('1')}>1</button>
            <button id="two" onClick={() => handleNumberClick('2')}>2</button>
            <button id="three" onClick={() => handleNumberClick('3')}>3</button>
            <button id="four" onClick={() => handleNumberClick('4')}>4</button>
            <button id="five" onClick={() => handleNumberClick('5')}>5</button>
            <button id="six" onClick={() => handleNumberClick('6')}>6</button>
            <button id="seven" onClick={() => handleNumberClick('7')}>7</button>
            <button id="eight" onClick={() => handleNumberClick('8')}>8</button>
            <button id="nine" onClick={() => handleNumberClick('9')}>9</button>
            <button id="add" onClick={() => handleOperatorClick('+')}>+</button>
            <button id="subtract" onClick={() => handleOperatorClick('-')}>-</button>
            <button id="multiply" onClick={() => handleOperatorClick('*')}>*</button>
            <button id="divide" onClick={() => handleOperatorClick('/')}>/</button>
            <button id="decimal" onClick={handleDecimalClick}>.</button>
            <button id="clear" onClick={handleClearClick}>AC</button>
            <button id="equals" onClick={handleEqualsClick}>=</button>
        </div>
    );
};

export default Calculator;
