"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayfill = void 0;
exports.arrayfill = () => {
    var array = [];
    for (let index = 0; index < 10; index++) {
        array.push(Math.floor(Math.random() * 100));
    }
    return array;
};
//# sourceMappingURL=utils.js.map