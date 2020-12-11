"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testArray = void 0;
const arrayify_1 = require("../../utils/arrayify");
exports.testArray = (array) => {
    array = arrayify_1.arrayify();
    if (array.length === 0) {
        for (let index = 0; index < 10; index++) {
            array.push(Math.floor(Math.random() * 100));
        }
    }
    return array;
};
//# sourceMappingURL=arrayify.test.js.map