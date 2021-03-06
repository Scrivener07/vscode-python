// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../common");
function replaceModule(contents, moduleName, quotes) {
    const stringToSearch = `${quotes}${moduleName}${quotes}`;
    const stringToReplaceWith = `${quotes}./node_modules/${moduleName}${quotes}`;
    return contents.replace(new RegExp(stringToSearch, 'gm'), stringToReplaceWith);
}
// tslint:disable:no-default-export no-invalid-this
function default_1(source) {
    common_1.nodeModulesToReplacePaths.forEach(moduleName => {
        if (source.indexOf(moduleName) > 0) {
            source = replaceModule(source, moduleName, '"');
            source = replaceModule(source, moduleName, '\'');
        }
    });
    return source;
}
exports.default = default_1;
