import * as assert from 'assert';

enum MathOperator {
    ADD,
    SUBTRACT,
    MULTIPLY,
    DIVIDE
}

function calculate(operator: MathOperator, val1: number, val2: number): number {
    switch(operator) {
        case MathOperator.ADD:
            return val1 + val2;
        case MathOperator.SUBTRACT:
            return val1 - val2;
        case MathOperator.MULTIPLY:
            return val1 * val2;
        case MathOperator.DIVIDE:
            return val1 / val2;
    }
}

describe('Calculator Tests', () => {

    beforeEach(() => {
        // do stuff
    });

    afterEach(() => {
        // do stuff
    });

    it('adds two numbers together', () => {
        assert.equal(calculate(MathOperator.ADD, 1, 4), 1 + 4);
    });

    it('should do async calculation', async () => {
        let calculatedValue = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(calculate(MathOperator.MULTIPLY, 1, 4));
            }, 500);
        });
        assert.equal(calculatedValue, 1 * 4);
    });
});