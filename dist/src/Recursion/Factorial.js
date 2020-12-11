"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factorial = void 0;
exports.Factorial = (number) => {
    if (number < 0) {
        return -1;
    }
    if (number === 0 || number === 1) {
        return 1;
    }
    return number * exports.Factorial(number - 1);
};
//# sourceMappingURL=Factorial.js.map