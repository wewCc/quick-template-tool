#!/usr/bin/env node
const {program, Option} = require("commander")
const {commonInfo} = require("../js/commonInfo.js")
const {switchTools, downloadWebpackLoader} = require("../js/downloadWebpackLoad.js")
program.version(commonInfo.version)
    .description(commonInfo.description)

program.addOption(new Option("-d,--download <loader>",
    "to download webpack loader(use ',' to split args)\n" +
    "(multi choices: css,file,webpack)"))
    .addOption(new Option("-s,--switchTool <toolName>", "to switch the download tool,need to use with -d")
        .choices(["npm", "cnpm"])
        .default("npm"))
    .action(option => {
        let {download, switchTool} = option
        if (switchTool && download) {
            switchTool && switchTools(switchTool, option)
        } else if (switchTool) {
            console.log("error:-s[--switchTool] need to use with -d[--download]")
        } else if (download) {
            download && downloadWebpackLoader(option)
        }

    })
program.parse(process.argv)