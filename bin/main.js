#!/usr/bin/env node
const {program, Option} = require("commander")
const {commonInfo} = require("../js/commonInfo.js")
const {generateTemplateForWebPack} = require("../js/webpackFileGenerate/index")
const {switchTools, downloadWebpackLoader} = require("../js/downloadWebpackLoad.js")
program.version(commonInfo.version)
    .usage("[options]")
    .name("quick-template-tool")
    .description(commonInfo.description)

program.addOption(new Option("-d,--download <loader>",
    "to download webpack loader(use ',' to split args)\n" +
    "(multi choices: css,file,webpack)\n\n"))
    .addOption(new Option("-s,--switchTool <toolName>", "to switch the download tool,need to use with -d")
        .choices(["npm", "cnpm"]))
    .addOption(new Option("-g,--generate <entryPath> <outputPath> <outputFileName> <generatePath>",
        "to generate webpack.config.js\nfor detail:\n\nentryPath  the entry file Path\n" +
        "outputPath:  the output file path\n" +
        "outputFileName: the output file name\n" +
        "generatePath: the path of finally generate\n\n" +
        'example: quick-template-tool -g "test.js bundle.js dist/" ' + "\n\n" +
        'notice: "" is necessary for this option!!'
    ))
    .action(option => {
        let {
            download,
            switchTool,
        } = option
        if (switchTool && download) {
            switchTool && switchTools(switchTool, option)
        } else if (switchTool) {
            console.log("error:-s[--switchTool] need to use with -d[--download]")
        } else if (download) {
            download && downloadWebpackLoader(option)
        }
        let generate = program.opts().generate

        if (generate !== undefined && generate.trim().length > 0) {
            generateTemplateForWebPack(generate.split(" "))
        }
    })
program.parse(process.argv)