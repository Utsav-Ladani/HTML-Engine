'use strict'

const chalk = require('chalk');

function config(type) {
    let color;
    let symbolCode;
    switch (type) {
        case "message":
            color = "0829FA";
            symbolCode = "\u003E";
            break;
        case "success":
            color = "21C903";
            symbolCode = "\u2714";
            break;
        case "warning":
            color = "#F1F902";
            symbolCode = "\u26A0";
            break;
        case "fail":
            color = "FA08BF";
            symbolCode = "\u2716";
            break;
        case "error":
            color = "FC0000";
            symbolCode = "\u0021\u0021";
            break;
        default:
            color = "FFFFFF";
            symbolCode = "";
            break;
    }

    return {
        color,
        symbolCode,
    };
}

function mylog(type, ...args) {
    let style = config(type);
    console.log(`${chalk.hex(style.color)(style.symbolCode)}`, ...args);
}

module.exports = mylog;
