const path = require('path')
const fs = require('fs')

const mylog = require("./LoggerRoute")
const config = require("../test/config.json");

const syntax = /\{\s*\w+\s*\}/g;


function runEngineSync(...filePath) {          // here filePath is path of view
    let data;
    try { 
        data = fs.readFileSync(path.join(__dirname, ...filePath), { encoding: 'utf-8' }) 
    }
    catch {
        mylog("error", "error");
        return "";
    }

    data = data.replace(syntax, (match) => {
        let d = runEngineSync("../test/views", match.match(/\w+/) + ".html");
        return d;
    })

    return data;
}

function run() {
    const fileData = runEngineSync("../", config.input);
    fs.writeFileSync(path.join(__dirname, "../build/main.html"), fileData);
}

fs.watch(path.join(__dirname, "../test/views/"), (curr, prev) => {
    run();
});