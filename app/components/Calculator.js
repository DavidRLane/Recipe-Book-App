import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import calc from '../../app/styles/Calculator.js';

export default class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            displayText: '',
            resultText: '',
            answer: ''
        };
        this.OPERATION_REGEX = /\/|\*|-|\+/;
    }

    /**
     * @function changeDisplay
     * @description Update the display text field
     * @param {Char/Number} input 
     */
    changeDisplay(input) {
        this.setState({
            displayText: this.state.displayText + input
        });
    }

    /**
     * @function updateResult
     * @description Preemptively display result of operations and inputs
     */
    updateResult(input) {
        let result = this.state.displayText + input;

        this.setState({
            displayText: result,
            resultText: eval(result)
        });
    }

    /**
     * @function calculate
     * @description Calculates the displayed operations and numbers.
     */
    calculate() {
        let result = eval(this.state.displayText);

        this.setState({
            resultText: result,
            displayText: '',
            answer: result
        });
    }

    /**
     * @function operate
     * @description Perform the given operation on the displayText.
     *              DEL will remove the last character in the string.
     *              ANS will add the previous result to the string.
     *              All other operations will perform their actions after a number is included.
     * @param {String/Char} input Operation to perform, all options listed in switch/case
     */
    operate(input) {
        switch (input) {
            case 'DEL':
                this.setState({
                    displayText: this.state.displayText.slice(0, this.state.displayText.length - 1)
                });
                break;
            case 'ANS':
                this.setState({
                    displayText: this.state.displayText + this.state.answer
                });
                break;
            case '/':
            case '*':
            case '-':
            case '+':
                //Allow Operations one at a time
                if (!this.state.displayText[this.state.displayText.length - 1].match(this.OPERATION_REGEX)) {
                    this.setState({
                        displayText: this.state.displayText + input
                    });
                }
                break;
        }
    }

    /**
     * @function buttonPressed
     * @description Process numbers and inputs from User.
     *              Handles the operators to render the final result.
     *              Equates the result once '=' is pressed.
     * @param {String/Number} input Number or Operation from input fields
     */
    buttonPressed(input) {
        input = input.toString(10);

        if (input == '=') {
            return this.calculate();
        } else if (input.match(/\d/)) {
            this.updateResult(input);
        } else {
            this.changeDisplay(input);
        }
    }

    //Renders components onto the page
    render() {
        const NUMBERS = [[7, 4, 1, 0], [8, 5, 2, '.'], [9, 6, 3, '=']];
        const OPERATIONS = ['DEL', 'ANS', '/', '*', '-', '+'];

        let numArray = [];
        let opArray = [];

        //Number Inputs
        NUMBERS.forEach((row) => {
            let tempRow = [];

            row.forEach((numCell) => {
                //Create a key per element
                tempRow.push(
                    <TouchableOpacity key={numCell} onPress={() => this.buttonPressed(numCell)} style={calc.cell}>
                        <Text style={calc.cellText}>{numCell}</Text>
                    </TouchableOpacity>
                );
            });
            //Create a key per element
            numArray.push(
                <View key={row} style={calc.row}>
                    {tempRow}
                </View>
            );
        });

        //Operation Inputs
        OPERATIONS.forEach((row) => {
            //Create a key per element
            opArray.push(
                <TouchableOpacity key={row} onPress={() => this.operate(row)} style={calc.cell}>
                    <Text style={calc.cellText}>{row}</Text>
                </TouchableOpacity>
            );
        });

        return (
            <View style={calc.container}>
                <View style={calc.display}>
                    <Text style={calc.displayText}>{this.state.displayText}</Text>
                </View>
                <View style={calc.results}>
                    <Text style={calc.resultsText}>{this.state.resultText}</Text>
                </View>
                <View style={calc.inputs}>
                    <View style={calc.numbers}>
                        {numArray}
                    </View>
                    <View style={calc.operations}>
                        {opArray}
                    </View>
                </View>
            </View>
        );
    }
};