"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayify = void 0;
exports.arrayify = () => {
    const array = [];
    for (let index = 0; index < 10; index++) {
        array.push(Math.floor(Math.random() * 100));
    }
    return array;
};
//# sourceMappingURL=utils.js.map